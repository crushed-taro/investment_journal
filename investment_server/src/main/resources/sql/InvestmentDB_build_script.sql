DROP TABLE IF EXISTS tbl_member CASCADE;
CREATE TABLE IF NOT EXISTS tbl_member
(
    member_code INT AUTO_INCREMENT NOT NULL COMMENT '회원',
    member_name VARCHAR(255) NOT NULL COMMENT '이름',
    member_id VARCHAR(255) NOT NULL COMMENT '아이디',
    member_password VARCHAR(255) NOT NULL COMMENT '비밀번호',
    CONSTRAINT pk_member_code PRIMARY KEY (member_code)

) ENGINE=InnoDB COMMENT '유저';

DROP TABLE IF EXISTS tbl_investment CASCADE;
CREATE TABLE IF NOT EXISTS tbl_investment
(
    investment_code INT AUTO_INCREMENT NOT NULL COMMENT '투자내역코드',
    member_code VARCHAR(255) NOT NULL COMMENT '회원',
    investment_title VARCHAR(255) NOT NULL COMMENT '제목',
    investment_date VARCHAR(255) NOT NULL COMMENT '투자날짜',
    investment_contents VARCHAR(4000) NOT NULL COMMENT '투자내용',
    CONSTRAINT pk_investment_code PRIMARY KEY (investment_code)

) ENGINE=InnoDB COMMENT '투자내역';

DROP TABLE IF EXISTS tbl_investment_detail CASCADE;
CREATE TABLE IF NOT EXISTS tbl_investment_detail
(
    investment_detail_code INT AUTO_INCREMENT NOT NULL COMMENT '투자상세내역코드',
    investment_code INT NOT NULL COMMENT '투자내역코드',
    investment_ticker VARCHAR(255) NOT NULL COMMENT '고유코드',
    investment_stock INT NOT NULL COMMENT '수량',
    investment_sale INT NOT NULL COMMENT '매도금액',
    CONSTRAINT pk_investment_detail_code PRIMARY KEY (investment_detail_code)
) ENGINE=InnoDB COMMENT '투자상세내역';
