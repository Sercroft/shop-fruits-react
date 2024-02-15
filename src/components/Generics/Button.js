import styled, { css } from 'styled-components';

const hueStep = 90;
const delayStep = '0.115s';

const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    color: black;
    font: 600 1.05rem/1 "Nunito", sans-serif;
    letter-spacing: 0.05em;
    overflow: hidden;
    padding: 1.15em 3.5em;
    min-height: 3.3em;
    position: relative;

    &:active,
    &:focus {
        outline: 3px solid hsl(calc(var(--hue) + ${hueStep}), 98%, 80%);
    }

    & + & {
        margin-top: 2.5em;
    }
`

const ButtonBg = styled.i`
    background: hsl(var(--hueBg), 98%, 80%);
    border-radius: 50%;
    display: block;
    height: 0;
    left: 50%;
    margin: -50% 0 0 -50%;
    padding-top: 100%;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: scale(0);
    transform-origin: 50% 50%;
    transition: transform 0.175s cubic-bezier(0.5, 1, 0.89, 1);
    z-index: 1;

    ${Array.from({ length: 4 }).map((_, i) => css`
        &:nth-of-type(${i + 1}) {
            --hueBg: calc(var(--hue) - ${(i + 1) * hueStep});
            transition-delay: ${delayStep} / 2 * ${4 - i};
        }
    `)}

    ${Button}:hover &,
    ${Button}:focus &,
    ${Button}:active & {
        transform: scale(1.5);
        transition: transform 0.35s cubic-bezier(0.11, 0, 0.5, 0);

        ${Array.from({ length: 4 }).map((_, i) => css`
            &:nth-of-type(${i + 1}) {
                transition-delay: ${delayStep} * ${i + 1};
            }
        `)}
    }
`

const PurpleButton = styled(Button)`
    --hue: 244;
`
const ButtonText = styled.span`
    position: relative;
    z-index: 2;
`

const PurpleButtonBg = styled(ButtonBg)``;

export {
    PurpleButton,
    ButtonText,
    PurpleButtonBg
};