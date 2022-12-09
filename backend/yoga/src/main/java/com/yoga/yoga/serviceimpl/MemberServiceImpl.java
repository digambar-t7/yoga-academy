package com.yoga.yoga.serviceimpl;

import java.util.List;

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
    public Member registerMember(Member member) {
        return this.memberRepository.save(member);
    }

    @Override
    public List<Member> getAllMembers() {
        return this.memberRepository.findAll();
    }

}
