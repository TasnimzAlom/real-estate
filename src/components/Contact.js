import React from 'react'
import styled from 'styled-components';

const ContactUs = styled.section`
height:100vh;
width:100%;
padding:1rem;
display:flex;
flex-direction:column;
`;
const LetsTalk = styled.header`
font-size:2rem;
padding:3rem;
`;


const ContactHero = styled.div`
background: url("https://i.ibb.co/RHvyCxR/pexels-photo.jpg");
background-size:cover;
background-repeat:no-repeat;
height:100%;
width:100%;
display:flex;
align-items:center;
`;
const ContactCard =styled.div`
padding:4rem 3rem;
display:flex;
flex-direction:column;
display:flex;
flex-direction:column;
background:#212121;
text-align:left;
box-shadow:black 1rem 1rem 3rem;
border-radius:10px;

`;
const ContactForm =styled.form`
display:flex;
flex-direction:column;
align-items:center;
border:none;
`;
const ContactInput = styled.input`
width:450px;
font-size:1.5rem;
padding:1.5rem 0 .5rem 1rem;
border:none;
border-bottom:1px solid white;
background:#212121;
color:#808080;

`;
const ContactText = styled.textarea`
font-size:1.5rem;
width:100%;
padding:1.5rem 0 .5rem 1rem;
background:#212121;
color:white;
border:none;
border-bottom:1px solid white;
resize:none;
overflow:auto;
color:#808080;
margin-bottom:1rem;
`;

const Send = styled.button`
border:none;
font-size:1.5rem;
color:white;
background:none;
cursor:pointer;
&:hover{
    color:red;
}

`;
const Contact = () => {
    return (
        <ContactUs>
            <LetsTalk>
                let's connect
            </LetsTalk>
            <ContactHero>
                <ContactCard>
                    <h2>Contact</h2>
                    <ContactForm >
                        <ContactInput 
                        type="text"
                        name="name"
                        placeholder="name"
                        value=""
                        >
                        </ContactInput>
                        <ContactInput 
                        type="text"
                        name="email"
                        placeholder="email"
                        value=""
                        >
                        </ContactInput>
                        <ContactInput 
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value=""
                        >
                        </ContactInput>
                        <ContactText 
                        type="text"
                        name="message"
                        value="message"
                        >
                        </ContactText>
                        <Send>Send</Send>
                    </ContactForm>
                </ContactCard>
            </ContactHero>
            
        </ContactUs>
    )
}

export default Contact
