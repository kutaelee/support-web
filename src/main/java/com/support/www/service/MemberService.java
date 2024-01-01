package com.support.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.support.www.mapper.MemberMapper;
import com.support.www.vo.Member;

import lombok.RequiredArgsConstructor;

@Service
@Component
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class MemberService {
    private final MemberMapper memberMapper;

    public List<Member> getAllMembers() {
        return memberMapper.selectAllMembers();
    }
}
