import { Textfit } from "react-textfit";
import "./screen.css";

const screen = ({ value}) => {
    return (
        <Textfit className='screen' mode='single' max={70}>
            {value}
        </Textfit>
    );

};

export default screen;