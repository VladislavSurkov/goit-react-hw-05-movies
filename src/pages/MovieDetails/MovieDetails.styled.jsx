import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  border: none;
  background-color: blue;
  color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
`;

export const InfoList = styled.ul`
  text-decoration: none;
  margin-left: 0;
  margin-top: 0;
`;
export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

export const InfoLink = styled(NavLink)`
  font-weight: 600;
  text-decoration: none;
  background-color: blue;
  padding: 10px;
  border-radius: 10px;
  color: #ececf1;
`;
