const dimmedTextColor = "#cccccc";

export const generate_text_output = (renderTheme) => {
  const themeColor = renderTheme === "green" ? "rgba(0, 255, 119, 1)" : "#f85c2c"

  return `
<span style="color: ${dimmedTextColor}">C:\\cybertech></span> Chcesz zacząć swoją przygodę ze <span style="color: ${themeColor};">sztuczną inteligencją</span>? A może szukasz ciekawych projektów w gronie pasjonatów?

<span style="color: ${dimmedTextColor}">C:\\cybertech></span> <span style="color: ${themeColor};">Świetnie trafiłeś!</span>

<span style="color: ${dimmedTextColor}">C:\\cybertech></span> Organizujemy <span style="color: ${themeColor};">kursy dla początkujących</span>, stawiające na praktyczne podejście i luźną atmosferę.

<span style="color: ${dimmedTextColor}">C:\\cybertech></span> Prowadzimy też liczne <span style="color: ${themeColor};">projekty</span>, które pozwalają zmierzyć się z ciekawymi wyzwaniami w świetnym towarzystwie, rozwiązując przy tym <span style="color: ${themeColor};">realne problemy</span> we współpracy z firmami zewnętrznymi.

<span style="color: ${dimmedTextColor}">C:\\cybertech></span> Specjalizujemy się w <span style="color: ${themeColor};">przetwarzaniu obrazów</span> i <span style="color: ${themeColor};">uczeniu maszynowym</span> korzystając głównie z narzędzi takich jak <span style="color: ${themeColor};">TensorFlow i Keras</span>.

<span style="color: ${dimmedTextColor}">C:\\cybertech></span> <span style="color: ${themeColor};">Oferujemy wykłady wprowadzające, live coding i projekty, które pozwalają stopniowo poszerzać swoją wiedzę i umiejętności.</span>

<span style="color: ${dimmedTextColor}">C:\\cybertech></span> Jesteśmy otwarci na wszystkich – potrzebujesz jedynie motywacji i podstawowych umiejętności programowania. Masz inne talenty albo interesujesz się innymi dziedzinami informatyki? Również zapraszamy! W naszych interdyscyplinarnych projektach każdy znajdzie coś dla siebie.

<span style="color: ${dimmedTextColor}">C:\\cybertech></span> `
};
