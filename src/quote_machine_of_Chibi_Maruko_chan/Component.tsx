import { CSSProperties, useEffect } from "react";

import { getRandomIndex } from "../utils/number";
import LogoFigure from "../assets/logo_figure.png";
import "./Component.css";

const QUOTES = [
  "与其过别人的节，不如睡自己的觉。",
  "我纯真的心由于牛排饭而欢呼不已。",
  "咱们还是小孩呢！不必这么装模作样吧！",
  "脾气不能够不发，宁可丢坏书本，不能憋坏身体！",
  "那么地不知道羞耻，一定活得很轻松呀！",
  "一个人在房间里也需要自娱自乐。",
  "不是为了零食，而是为了吃零食。",
  "人生太过硬邦邦是不好的。",
  "我对电视节目一直都有自己独特的品位。",
  "如果光吃菜营养就好的话，为什么还要吃肉呢？",
  "心满意足享受每一点快乐，是走向幸福的唯一途径。",
  "打扮得像忙人，其实最会偷懒。",
  "如果人的一生只吃松软的食物，不要求别的，那真是会后悔呀！",
  "妈妈要是不高兴，会把你多少年前的糗事一股脑端出来，人称“精神原子弹”。",
  "懂我的人一定能明白我的魅力所在。",
  "其实只要我们肯努力也是做得到的。",
  "幸福是不会自己走过来的。",
  "人生里根本就没有赢家或是输家。",
  "提起精神来，奋斗到底这样才对。",
  "是自己太天真了，还是世界太过无情了。",
  "念书这种事情，就让那些喜欢念书的人去做好了。",
  "哭过之后你就会变得很坚强的。",
  "我都搞不清楚，我自己到底是什么样的人。",
  "我劝你多少要懂得去怀疑事物。",
  "反正担心或不担心，结果都是一样的，既然这样，光担心的话不是很吃亏吗？",
  "幸福就是虽然贫穷，但是大家身体都很健康、生活快乐就是幸福了！",
  "有些事情不是我不在意，而是我在意了又能怎样？",
  "只要活着就能遇到好事。",
  "我和大雄差不多，为什么我没有叮当猫呢？",
  "我们先把悲伤放在一边好吗？",
  "让我睡觉吧！反正也来不及了！",
  "这个世界可是很现实的。",
  "没经过大脑的事就别轻易答应。",
  "梦想要伟大，欲望要克制。",
  "运气呢，好的时候很好，坏的时候很坏。运气这东西不是求来的，而是自己创造的。",
  "我们的哀伤和年龄是没有关系的。",
  "人生就是在不断地后悔。",
  "道歉不是代表输了，而是用来结束失败和错误的。",
  "人最重要的就是 Relax！",
  "钱虽然重要，可是健康更重要。",
  "有些事情我看不透，不是我太笨，而是我太善良！",
  "人生就是这样有苦有乐。",
  "其实所谓的人生，就是充满了这么多无聊的事情。",
  "这个世界上，不是成绩好就可以了。",
  "成功的道路是很遥远的。",
  "女人要有胆量，男人要有魄力。",
  "人生在世总会有许多出人意料的事不断发生。",
  "说谎被看穿，比被骗的时候还要气人耶！",
  "思念总是在失去后开始。",
  "做人绝对不能够忘记别人照顾的恩情",
  "做人一定要饮水思源才对哦！",
  "谈恋爱本来就是会让人落泪。",
  "假期就是要有结束的一天才好啊，不然就不会去珍惜了。",
  "指望别人是永远得不到幸福的。",
  "想要得到奖励有什么不对啊！大家都是为了赚钱才做事的啊！",
  "就算说了那么多丧气的话，也一直在努力生活啊！表面丧气就好了。",
  "作业就是最后一天做才有意义。",
];

const App = () => {
  useEffect(() => {
    document.title = "樱桃小丸子语录";
  }, []);

  const generateQuote = () => {
    const random_index = getRandomIndex(QUOTES.length);
    return "🍒 " + QUOTES[random_index];
  };

  const renderQuote = () => {
    return <div style={{ margin: "0 20px" }}>{generateQuote()}</div>;
  };

  const renderFooter = () => {
    const footerStyle: CSSProperties = {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 12,
    };

    return (
      <div style={footerStyle}>
        <img src={LogoFigure} width={30} height={30} />
        <span style={{ marginBottom: -4 }}>
          Powered by
          <a
            href="https://www.notion.so/roll-roll-go/s-Home-1beed66eeff84a3cabc455bee81c7237"
            target="_blank"
          >
            RollRollGo
          </a>
        </span>
      </div>
    );
  };

  return (
    <div id="background">
      <div id="container">
        {renderQuote()}
        <div id="author">——《樱桃小丸子》</div>
        <div
          style={{ height: 1, margin: "10px 0", backgroundColor: "#C9C9C9" }}
        ></div>
        {renderFooter()}
      </div>
    </div>
  );
};

export default App;
