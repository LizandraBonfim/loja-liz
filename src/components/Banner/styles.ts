import styled from 'styled-components';
import banner from '../../assets/banner.jpg';

export const ContainerBanner = styled.article`
    background: url(${banner}) no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    position: relative;
    background-attachment: fixed;

`;
