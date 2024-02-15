import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { MyInputText } from './InputText';
import { MyButton } from './Button';


const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: auto;
    padding: 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0);
    border: 3px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
`

const FormField = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
`;

const MsgError = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: black;
    padding-left: 2px;
`

const Form = () => {
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit} = useForm();

    const getData = (data) => {
        console.log(data);
        navigate('/home');
    }

    return(
        <MyForm onSubmit={handleSubmit(getData)}>

            <FormField>
                <Label>Usuario</Label>
                <MyInputText 
                    type = "text" 
                    {...register('user', {
                        required: true
                        })
                     } 
                />
                {errors.user?.type === 'required' && <MsgError>User is required!</MsgError>}
            </FormField>

            <FormField>
                <Label>Password</Label>
                <MyInputText 
                    type = "password" 
                    {...register('password', {
                        required: true
                        })
                     } 
                />
                {errors.password?.type === 'required' && <MsgError>Password is required!</MsgError>}
            </FormField>
            
            <MyButton type="submit">LogIn!</MyButton>
        </MyForm>
    );
}

export default Form;