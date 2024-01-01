package com.support.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.support.www.service.MemberService;
import com.support.www.vo.Member;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class MemberController {
     private final MemberService memberService;

    @GetMapping("/MemberSelect")
    public List<Member> getMethodName() {
        return  memberService.getAllMembers();
    }
    
}
