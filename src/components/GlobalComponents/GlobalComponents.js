import styled from "styled-components"

export const GlobalSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    height: 100%;
`

export const GlobalContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GlobalTitleSection = styled.h2`
    font-size: 1.6rem;
    color: #000;
    font-weight: 600;
    @media (max-width:450px){
        font-size: 1.4rem;
        }
`

export const GlobalSecondTitle = styled.h3`
    font-size: 1.4rem;
    color: #000;
    font-weight: 600;
    @media (max-width:450px){
        font-size: 1.3rem;
        }
`

export const GlobalParagraph = styled.p`
    font-size: 1rem;
    color: #000;

    b{
        font-size: 1rem;
        color: #000;
    }
`

export const GlobalTable = styled.table`
    margin: 2rem 0;
    border-collapse: collapse;
    width: 100%;
    font-size: 1.4rem;
    color: #000;
    p,b{
      color: #000;
    }


    thead {
      border-top: 2px solid #1f93ff;
      border-bottom: 2px solid #1f93ff;
    }

    th {
      border: 1px solid #ccc;

    }

    .td-flex{
      display: flex;
      flex-direction: column;
      img{
        @media (max-width:490px){
          width: 60px;
          height: 50px;
          /* display: none; */
        }
        @media (max-width:420px){
          width: 50px;
          height: 40px;
          /* display: none; */
        }
        @media (max-width:350px){
          width: 40px;
          height: 30px;
          /* display: none; */
        }
      }

    }

    th,
    td {
      vertical-align: top;
      text-align: left;
      padding: 8px;
      color: #000;
      font-size: 1rem;
      img{
        margin-top: 10px;
        width: 200px;
        height: 100px;
        @media (max-width:620px){
          width: 120px;
          height: 90px;
        }
        @media (max-width:520px){
          width: 100px;
          height: 80px;
        }
        @media (max-width:420px){
          width: 50px;
          height: 40px;
          /* display: none; */
        }
        
      }

      .icons {
        
          margin-right: 5px;
          cursor: pointer;
          color: #000;
          background-color:red;
          font-size: 1rem;
        
      }
      @media (max-width:450px){
        font-size: .7rem;
        padding: 4px;
        img{

          width: 100px;
          height: 80px;  
        }
        }
    }

    tr {
      border-bottom: 1px solid #ccc;
      color: #000;
    }

    tr:nth-child(even) {
      background-color: #eee;
    }
`