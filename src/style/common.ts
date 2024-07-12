import { css } from "@emotion/react"

export const scrollLight = css`
  ::-webkit-scrollbar-track-piece{
    background-color: rgba(255, 255, 255, 0.3);
    -webkit-border-radius:5px;
  }
  ::-webkit-scrollbar{
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb:vertical{
    height:18px;
    background-color: white;
    -webkit-border-radius: 8px;
    outline-offset:-2px;
  }

  ::-webkit-scrollbar-thumb:horizontal{
    width: 18px;
    background-color: #ccc;
    -webkit-border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover{
    height:18px;
    background-color:#aaa;
    -webkit-border-radius: 8px;
  }
`

export const scrollDark = css`
  ${scrollLight};
  
  ::-webkit-scrollbar-thumb:vertical{
    background-color: rgba(0, 0, 0, 0.3);
  }
`