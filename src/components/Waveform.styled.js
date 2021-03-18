import styled from "styled-components";

export const WaveformContianer = styled.div`
  margin-top: -82px;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
`;

export const Wave = styled.div`
  width: 100%;
  margin-bottom: -9px;
  postion: relative;
  height: 90px;
  background: rgba(0, 0, 0, 0.6);
`;

export const Timeline = styled.div`
  width: 100%;
  margin-bottom: -9px;
  height: 90px;
  background: rgba(0, 0, 0, 0.6);
`;

export const Controls = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 0;
  background: #181818;
  `;

export const Play = styled.button`
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px 8px transparent;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
  &:focus {
    display: none;
  }
`;

export const Mute = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  &:focus {
    display: none;
  }
`;

export const Skip15 = styled.button`
  margin: 2px;
  padding: 2px;
  display: inline;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px -2px 30px 0px rgba(0, 0, 0, 0.39) inset;
    -webkit-box-shadow: 0px -2px 30px 0px rgba(0, 0, 0, 0.39) inset;
    -moz-box-shadow: 0px -2px 30px 0px rgba(0, 0, 0, 0.39) inset;
  }
  &:focus {
    display: none;
  }
`;

export const Volume = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 10%;
  height: 10px;
  background: #1f1529;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  background: linear-gradient(to bottom right, transparent 50%, #fff 50%);
`;
