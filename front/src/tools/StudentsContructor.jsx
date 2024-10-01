const StudentsConstructor = (student, courses=[]) =>{
	return {
		created_at: student.created_at,
		student_id: student.student_id,
		student_name: student.student_name,
		student_lastname: student.student_lastname,
		student_birthday: student.student_birthday,
		student_cpf: student.student_cpf,
		student_gender: student.student_gender,
		student_email: student.student_email,
		student_cep: student.student_cep,
		student_country: student.student_country,
		student_street: student.student_street,
		student_neighborhood: student.student_neighborhood,
		student_number: student.student_number,
		student_complement: student.student_complement,
		student_city: student.student_city,
		student_state: student.student_state,
		student_courses: courses 
	}
}
export default StudentsConstructor;
