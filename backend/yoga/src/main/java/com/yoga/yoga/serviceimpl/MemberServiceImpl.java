package com.yoga.yoga.serviceimpl;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.convert.JodaTimeConverters.LocalDateTimeToDateConverter;
import org.springframework.stereotype.Service;

import com.yoga.yoga.entity.Member;
import com.yoga.yoga.exceptions.AgeBeyondRangeException;
import com.yoga.yoga.exceptions.MemberAlreadyRegisteredException;
import com.yoga.yoga.exceptions.MemberNotFoundException;
import com.yoga.yoga.exceptions.PaymentDoneAlreadyException;
import com.yoga.yoga.repository.MemberRepository;
import com.yoga.yoga.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public void CompletePayment() {

    }

    @Override
    public Member registerMember(Member member) throws AgeBeyondRangeException, MemberAlreadyRegisteredException {
        int age = Period.between(member.getDob(), LocalDate.now()).getYears();
        if (age < 18 || age > 65) {
            throw new AgeBeyondRangeException("SORRY!!!Age is beyond the permissible range.");
        }
        if (member.getContactno() != null && this.memberRepository.findByContactno(member.getContactno()) != null) {
            throw new MemberAlreadyRegisteredException("An existing member found with the given contact no.");
        }
        if (member.getEmail() != null && this.memberRepository.findByEmail(member.getEmail()) != null) {
            throw new MemberAlreadyRegisteredException("An existing member found with the given Email ID.");
        }
        if (member.getDoj() == null) {
            member.setDoj(LocalDate.now());
        }
        return this.memberRepository.save(member);
    }

    @Override
    public List<Member> getAllMembers() {
        List<Member> list = this.memberRepository.findAll();
        for (Member member : list) {
            updateBatch(member);
        }
        return list;
    }

    @Override
    public boolean makePayment(long mid) throws MemberNotFoundException, PaymentDoneAlreadyException {
        Optional<Member> optMem = this.memberRepository.findById(mid);
        if (optMem.isEmpty()) {
            throw new MemberNotFoundException("Requested member not found.");
        }
        Member mem = optMem.get();
        String paidMonth = mem.getPaidMonth();
        if (paidMonth == null || !paidMonth.equals(LocalDate.now().getMonth().toString())) {
            CompletePayment();
            mem.setPaidMonth(LocalDate.now().getMonth().toString());
            this.memberRepository.save(mem);
            return true;
        }

        throw new PaymentDoneAlreadyException("Payment already done for the month of : " + paidMonth);
    }

    @Override
    public Member getMemberWithId(long mid) throws MemberNotFoundException {
        Optional<Member> member = this.memberRepository.findById(mid);
        if (member.isPresent()) {
            updateBatch(member.get());
            return member.get();
        } else {
            throw new MemberNotFoundException("Member with requested ID not found.");
        }
    }

    @Override
    public Member shiftBatch(long mid, String next) throws MemberNotFoundException {
        Optional<Member> optMember = this.memberRepository.findById(mid);
        if (optMember.isEmpty()) {
            throw new MemberNotFoundException("Member with requested ID not found.");
        }
        Member member = optMember.get();
        if (member.getNextBatch() == null || !member.getNextBatch().equals(next)) {
            member.setDateOfChange(LocalDate.now());
            member.setNextBatch(next);
            return member;
        }
        return null;
    }

    private void updateBatch(Member member) {
        if (member.getDateOfChange() == null || member.getDateOfChange().getMonth() == LocalDate.now().getMonth()) {
            return;
        }
        member.setCurrBatch(member.getNextBatch());
        member.setNextBatch(null);
        member.setDateOfChange(null);
        this.memberRepository.save(member);
    }

}
