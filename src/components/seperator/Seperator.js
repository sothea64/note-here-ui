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
              style={{ borderColor: ThemesProperties[theme].color }}
            />
          )
        }
      </ThemeContext.Consumer>
    </>
  );
}

export default Seperator;
