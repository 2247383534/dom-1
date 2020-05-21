const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(text, div);

const div3 = dom.create("<div id='parent'></div>");
dom.wrap(text, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(text, "title", "Hi,I am Kai");
const title = dom.attr(text, "title");
console.log(`title:${title}`);

dom.text(text, "你好，这是新的内容");
dom.text(text);

dom.style(text, { border: "1px solid red", color: "blue" });
console.log(dom.style(text, "border"));
dom.style(text, "border", "1px solid black");

dom.class.add(text, "red");
dom.class.add(text, "blue");
dom.class.remove(text, "blue");
console.log(dom.class.has(text, "blue"));

const fn = () => {
  console.log("点击了");
};
dom.on(text, "click", fn);
dom.off(text, "click", fn);

const textDiv = dom.find("#text")[0];
const text2 = dom.find(`#text2`)[0];
console.log(dom.find(".red", text2)[0]);

console.log(dom.parent(text));

const s2 = dom.find("#s2")[0];
console.log(dom.siblings(s2));
console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

console.log(dom.index(s2));
