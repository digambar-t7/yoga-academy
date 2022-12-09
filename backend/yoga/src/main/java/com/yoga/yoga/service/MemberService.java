
package com.yoga.yoga.service;

import java.util.List;

import com.yoga.yoga.entity.Member;

public interface MemberService {

    void CompletePayment();

    Member registerMember(Member member);

    List<Member> getAllMembers();

    boolean makePayment(long mid);

}
