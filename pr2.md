# Звіт до практичної роботи №2

## Фрагменти коду з `App.jsx`

### Використання `.map()` для виведення списку
```jsx
<div style={{ display: 'grid', gap: '15px' }}>
  {sortedStudents.map((student) => (
    <div
      key={student.id}
      style={{
        padding: '15px',
        border: '1px solid #334155',
        backgroundColor: '#1e293b',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '4px',
        opacity: student.isActive ? 1 : 0.4,
        textDecoration: student.isActive ? 'none' : 'line-through',
        color: student.isActive ? '#e2e8f0' : '#ef4444',
        boxShadow: student.isActive
          ? 'none'
          : 'inset 0 0 10px rgba(239, 68, 68, 0.2)',
      }}
    >
      <span>{student.name}</span>
      <span style={{ color: '#22d3ee' }}>Бали: {student.score}</span>
    </div>
  ))}
</div>
```

### Використання `.filter()` та `.map()` для елітних оперативників
```jsx
const eliteOperatives = students.filter((s) => s.isActive && s.score > 60);

// ... у JSX:
<ul style={{ listStyle: 'none', padding: 0 }}>
  {eliteOperatives.map((s) => (
    <li
      key={s.id}
      style={{
        padding: '10px 0',
        borderBottom: '1px solid rgba(16, 185, 129, 0.2)',
        color: '#10b981',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span>{s.name}</span>
      <span>Ранг: Elite | {s.score} pts</span>
    </li>
  ))}
</ul>
```

### Використання `.reduce()` для підрахунку середнього бала
```jsx
const activeStudents = students.filter((s) => s.isActive);
const averageScore =
  activeStudents.length > 0
    ? activeStudents.reduce((acc, curr) => acc + curr.score, 0) / activeStudents.length
    : 0;

// ... у JSX:
<h2 style={{ color: '#22d3ee', textTransform: 'uppercase', textShadow: '0 0 15px #22d3ee', fontSize: '24px' }}>
  Загальний системний рейтинг: {averageScore.toFixed(1)}
</h2>
```

## Відповіді на контрольні запитання

**1. Чому обов'язкове використання атрибута key необхідне для роботи React?**
Обов'язкове використання атрибута `key` необхідне для правильної роботи алгоритму узгодження (Reconciliation). Без унікального ключа React не зможе ефективно відстежувати, які саме елементи змінилися, додалися чи видалилися при оновленні стану. Це призводить до того, що React може знову перемальовувати весь список замість зміни одного елемента, що створює проблеми з продуктивністю та може спричинити баги у роботі з компонентами, які мають власний внутрішній стан (наприклад, фокус у інпутах).

**2. У чому полягає різниця між методами .map() та .forEach()?**
Різниця між `.map()` та `.forEach()` полягає в тому, що `.map()` створює та повертає новий масив, трансформуючи кожен елемент вихідного масиву (що ідеально підходить для рендерингу JSX-елементів у React). У той час як `.forEach()` просто виконує передану функцію для кожного елемента "на місці" (side effect) і завжди повертає `undefined`. В React ми використовуємо саме `.map()`, оскільки нам потрібно отримати масив компонентів для відображення.

**3. Чому не рекомендується використовувати індекс масиву як значення атрибута key?**
Використовувати індекс масиву як ключ не рекомендується, оскільки при будь-якій зміні порядку елементів (наприклад, при сортуванні, видаленні елемента з середини або додаванні нового на початок) індекси всіх наступних елементів зсуваються. Це ламає внутрішню прив'язку стану React до конкретних DOM-вузлів: React буде "думати", що елемент залишився той самий (бо індекс 0 залишився), хоча дані в ньому змінилися. Це призводить до візуальних помилок та проблем із продуктивністю.
