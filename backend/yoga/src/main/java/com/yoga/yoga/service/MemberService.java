
package com.yoga.yoga.service;

import java.util.List;

import com.yoga.yoga.entity.Member;

public interface MemberService {

    Member registerMember(Member member);

    List<Member> getAllMembers();

}
