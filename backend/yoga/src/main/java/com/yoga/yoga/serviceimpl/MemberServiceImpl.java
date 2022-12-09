package com.yoga.yoga.serviceimpl;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
        return this.memberRepository.save(member);
    }

    @Override
    public List<Member> getAllMembers() {
        return this.memberRepository.findAll();
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
            return member.get();
        } else {
            throw new MemberNotFoundException("Member with requested ID not found.");
        }
    }

}
