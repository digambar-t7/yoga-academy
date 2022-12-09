package com.yoga.yoga.serviceimpl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yoga.yoga.entity.Member;
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
    public Member registerMember(Member member) {
        return this.memberRepository.save(member);
    }

    @Override
    public List<Member> getAllMembers() {
        return this.memberRepository.findAll();
    }

    @Override
    public boolean makePayment(long mid) {
        Optional<Member> optMem = this.memberRepository.findById(mid);
        if (optMem.isEmpty()) {
            return false;
        }
        Member mem = optMem.get();
        String paidMonth = mem.getPaidMonth();
        if (paidMonth == null || !paidMonth.equals(LocalDate.now().getMonth().toString())) {
            CompletePayment();
            mem.setPaidMonth(LocalDate.now().getMonth().toString());
            this.memberRepository.save(mem);
            return true;
        }

        return false;
    }

}
