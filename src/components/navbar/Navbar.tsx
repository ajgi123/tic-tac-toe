import styles from "./Navbar.module.scss";
import { useState, useContext } from "react";
import { GameModeInfo } from "../../game-logic/game-mode-info";
import { GameModeContext } from "../../store/gameMode-context";
import DropdownMenuItem from "./dropdown-menu/dropdown-menu-item/DropdownMenuItem";
import DropdownMenu from "./dropdown-menu/DropdownMenu";
import Dropdown from "./dropdown/Dropdown";
import NavbarItem from "./navbar-items/NavbarItem";
import { simulationInfo } from "../../game-logic/simulationInfo";
import { typedObjectKeys } from "../../helpers/typedObjectKeys";
import { useHistory } from "react-router";

const gameModeInfoKeys = typedObjectKeys(GameModeInfo);

const Navbar = () => {
  const [info, setInfo] = useState(GameModeInfo.PvsP);
  const { setGameMode, gameMode } = useContext(GameModeContext);
  const history = useHistory();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        <NavbarItem name="Game Modes" route="/">
          <DropdownMenu info={info}>
            {gameModeInfoKeys.map((key) => {
              return (
                <DropdownMenuItem
                  name={key}
                  onMouseEnterHandler={() => {
                    setInfo(GameModeInfo[key]);
                  }}
                  key={key}
                  onClickHandler={() => {
                    if (gameMode === key) return;
                    history.push("/");
                    setTimeout(() => {
                      setGameMode(key);
                    }, 200);
                  }}
                />
              );
            })}
          </DropdownMenu>
        </NavbarItem>
        <NavbarItem name="Simulate" route="/sim">
          <Dropdown>
            <p>{simulationInfo}</p>
          </Dropdown>
        </NavbarItem>
      </ul>
    </nav>
  );
};

export default Navbar;