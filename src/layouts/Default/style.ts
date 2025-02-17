import { scrollDark } from "@/style/common";
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .layout-wrapper{
    height: 100vh;
  }


  .main-wrapper{
    overflow: auto;
    ${scrollDark};
  }

  .ant-layout-sider-collapsed {
    .header{
      margin: 0 !important;
      justify-content: center !important;
    }
    .logo{
      display: none;
    }

    .body{
      .title{
        display: none;
      }
    }
  }

  .sider-wrapper{
    background-color: white;
    border-right: 1px solid #eee;

    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      margin-left:30px;
      margin-right: 10px;
    }
    .logo{
      color: var(--main-color);
      font-size: 24px;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      font-weight: 700;
    }

    .body{
      .title{
        font-size: 14px;
        color: #999;
        margin: 20px 30px 5px;
      }
    }
  }

  .main-header{
    position: sticky;
    padding: 0 15px;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    .page-title{
      background-color: white;
      height: 54px;
      line-height: 54px;
      padding-left: 20px;
      font-size: 20px;
      font-weight: 600;
    }

    .right-bar{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-right: 10px;
    }

    .separator{
      width: 1px;
      height: 20px;
      background-color: #ccc;
      margin-left: 20px;
      margin-right: 10px;
    }

    .avatar{
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  .main-content{
    padding: 20px 30px;
  }


// Search form
.search-form{
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px 10px;
}
`

