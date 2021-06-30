import styles from "./Loading.module.scss";
import { useSprings, animated, config } from "@react-spring/web";

type LoadingProps = {
  name: string;
};

const Loading = (props: LoadingProps) => {
  const text = props.name.split("");

  const base = {
    loop: true,
    config: config.wobbly,
    from: { transform: "translate3d(0,0,0)", opacity: 1, color: "#D46615" },
    to: [
      { transform: "translate3d(0,-40px,0)", opacity: 0, color: "#7BFF33" },
      { transform: "translate3d(0,0,0)", opacity: 1, color: "#D46615" },
    ],
  };

  const springs = useSprings(
    text.length,
    text.map((t, i) => ({ ...base, delay: 10 * i }))
  );

  return (
    <div className={styles.loading_div}>
      {springs.map((s, i) => {
        return (
          <animated.div key={`char${i}`} style={s}>
            {text[i] === " " ? <>&nbsp;</> : text[i]}
          </animated.div>
        );
      })}
    </div>
  );
};

export default Loading;
