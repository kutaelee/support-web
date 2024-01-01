package com.support.www.mapper;

import com.support.www.vo.Member;
import java.util.List;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    
    @Select("SELECT * FROM MEMBERS")
    List<Member> selectAllMembers();
}