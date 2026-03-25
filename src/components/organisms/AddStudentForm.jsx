import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import styles from './AddStudentForm.module.css';

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({ name: '', score: '' });
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState({ name: false, score: false });

  const validate = (data) => {
    const newErrors = {};
    if (data.name.trim().length < 2) {
      newErrors.name = 'Ім’я має містити принаймні 2 символи';
    }
    const scoreNum = Number(data.score);
    if (data.score === '' || isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      newErrors.score = 'Бал має бути числом від 0 до 100';
    }
    return newErrors;
  };

  useEffect(() => {
    setErrors(validate(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validate(formData);
    if (Object.keys(currentErrors).length === 0) {
      onAddStudent({
        id: Date.now(),
        name: formData.name.trim(),
        score: Number(formData.score),
        isActive: true,
      });
      setFormData({ name: '', score: '' });
      setIsTouched({ name: false, score: false });
    }
  };

  const isFormInvalid = Object.keys(errors).length > 0 || !formData.name || !formData.score;

  return (
    <form className={styles.formTerminal} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Реєстрація Нового Кадета</h3>
      
      <div className={styles.field}>
        <Input
          label="Позивний (Ім’я)"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Введіть ім'я..."
        />
        {isTouched.name && errors.name && (
          <span className={styles.errorText}>{errors.name}</span>
        )}
      </div>

      <div className={styles.field}>
        <Input
          label="Рівень Підготовки (Бал)"
          name="score"
          type="number"
          value={formData.score}
          onChange={handleChange}
          placeholder="0-100"
        />
        {isTouched.score && errors.score && (
          <span className={styles.errorText}>{errors.score}</span>
        )}
      </div>

      <Button type="submit" disabled={isFormInvalid}>
        Додати до Системи
      </Button>
    </form>
  );
};

export default AddStudentForm;
