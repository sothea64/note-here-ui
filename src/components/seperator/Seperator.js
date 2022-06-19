import { ThemeContext, ThemesProperties } from "../../contexts/ThemeContext";
import "./Seperator.css";

function Seperator() {
  return (
    <>
      <ThemeContext.Consumer>
        {({ theme }) =>
          (theme === undefined && <>Loading...</>) || (
            <hr
              className="Seperator m-0 p-0"
              style={{ borderColor: ThemesProperties[theme].color, width:"100%", maxHeight:"1px" }}
            />
          )
        }
      </ThemeContext.Consumer>
    </>
  );
}

export default Seperator;
