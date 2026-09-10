console.log(`
=== Інструкція до функції triangle ===
Функція розв'язує прямокутний трикутник за двома параметрами.
Виклик: triangle(val1, "type1", val2, "type2")

Дозволені типи:
- "leg" (катет)
- "hypotenuse" (гіпотенуза)
- "adjacent angle" (прилеглий кут)
- "opposite angle" (протилежний кут)
- "angle" (гострий кут за наявності гіпотенузи)

Приклад: triangle(7, "leg", 18, "hypotenuse");
`);

function triangle(val1, type1, val2, type2) {
  if (typeof val1 !== "number" || typeof val2 !== "number" || val1 <= 0 || val2 <= 0) {
    return "Zero or negative input";
  }

  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const toDegrees = (radians) => radians * (180 / Math.PI);

  let a, b, c, alpha, beta;

  if (
    (type1 === "leg" && type2 === "hypotenuse") ||
    (type1 === "hypotenuse" && type2 === "leg")
  ) {
    const legVal = type1 === "leg" ? val1 : val2;
    const hypVal = type1 === "hypotenuse" ? val1 : val2;

    if (legVal >= hypVal) {
      return "Катет повинен бути меншим за гіпотенузу";
    }

    a = legVal;
    c = hypVal;
    b = Math.sqrt(c * c - a * a);
    alpha = toDegrees(Math.asin(a / c));
    beta = 90 - alpha;

  
  } else if (type1 === "leg" && type2 === "leg") {
    a = val1;
    b = val2;
    c = Math.sqrt(a * a + b * b);
    alpha = toDegrees(Math.asin(a / c));
    beta = 90 - alpha;

  
  } else if (
    (type1 === "leg" && type2 === "adjacent angle") ||
    (type1 === "adjacent angle" && type2 === "leg")
  ) {
    const legVal = type1 === "leg" ? val1 : val2;
    const angleVal = type1 === "adjacent angle" ? val1 : val2;

    if (angleVal <= 0 || angleVal >= 90) {
      return "Кут повинен бути в межах від 0 до 90 градусів";
    }

    b = legVal;
    alpha = angleVal;
    beta = 90 - alpha;
    c = b / Math.cos(toRadians(alpha));
    a = Math.sqrt(c * c - b * b);

 
  } else if (
    (type1 === "leg" && type2 === "opposite angle") ||
    (type1 === "opposite angle" && type2 === "leg")
  ) {
    const legVal = type1 === "leg" ? val1 : val2;
    const angleVal = type1 === "opposite angle" ? val1 : val2;

    if (angleVal <= 0 || angleVal >= 90) {
      return "Кут повинен бути в межах від 0 до 90 градусів";
    }

    a = legVal;
    alpha = angleVal;
    beta = 90 - alpha;
    c = a / Math.sin(toRadians(alpha));
    b = Math.sqrt(c * c - a * a);

  } else if (
    (type1 === "hypotenuse" && type2 === "angle") ||
    (type1 === "angle" && type2 === "hypotenuse")
  ) {
    const hypVal = type1 === "hypotenuse" ? val1 : val2;
    const angleVal = type1 === "angle" ? val1 : val2;

    if (angleVal <= 0 || angleVal >= 90) {
      return "Кут повинен бути в межах від 0 до 90 градусів";
    }

    c = hypVal;
    alpha = angleVal;
    beta = 90 - alpha;
    a = c * Math.sin(toRadians(alpha));
    b = c * Math.cos(toRadians(alpha));

  } else {
    console.log("Некоректні типи аргументів. Ознайомтеся з інструкцією.");
    return "failed";
  }

  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`c = ${c}`);
  console.log(`alpha = ${alpha}`);
  console.log(`beta = ${beta}`);

  return "success";
}