package com.yoga.yoga.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.yoga.entity.Member;
import com.yoga.yoga.service.MemberService;

@RestController
@RequestMapping("api/v1")
public class MemberController {

    private MemberService memberService;

    public MemberController(MemberService memberService) {
        super();
        this.memberService = memberService;
    }

    @GetMapping("getallmembers")
    private ResponseEntity<List<Member>> getAllMembers() {
        return ResponseEntity.status(200).body(this.memberService.getAllMembers());
    }

    @PostMapping("register")
    private ResponseEntity<Member> registerMember(@RequestBody Member member) {
        Member mem = this.memberService.registerMember(member);
        return ResponseEntity.status(201).body(mem);
    }

    @PostMapping("makepayment/{id}")
    private ResponseEntity<String> makePayment(@PathVariable("id") long mid) {
        if (this.memberService.makePayment(mid)) {
            return ResponseEntity.status(200)
                    .body("Payment successful for the month of : " + LocalDate.now().getMonth());
        } else {
            return ResponseEntity.status(400).body("Payment Failed");
        }
    }
}
