import styled from 'styled-components';

const Card = styled.div`
  padding: 2.5rem;
  border-radius: 0.75rem;
  background-color: hsl(0, 0%, 100%);
  height: 100%;
`;

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
    rgb(216, 180, 254) 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

const UserInfo = styled.div`
  font-size: 0.875rem;
`;

const UserName = styled.h4`
  font-weight: 400;
`;

const UserStatus = styled.p`
  opacity: 0.5;
`;

const Header = styled.div`
  display: flex;
  z-index: 10;
  gap: 1rem;
`;

Card.Header = Header;
Card.Avatar = Avatar;
Card.UserInfo = UserInfo;
Card.UserName = UserName;
Card.UserStatus = UserStatus;

export default Card;
