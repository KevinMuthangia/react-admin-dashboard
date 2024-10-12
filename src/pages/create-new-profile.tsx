import * as yup from "yup";
import { Formik } from "formik";
import Header from "../components/header";


const CreateNewProfile = () => {
	document.title = "KevMuthangia | Create New Profile";

	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		contact: "",
		address: "",
		password: "",
		confirmPassword: "",
	};

	const validationSchema = yup.object().shape({
		firstName: yup
			.string()
			.min(3, "Name should be at least 3 characters")
			.max(15, "Name should be less than 15 characters")
			.required("required"),
		lastName: yup
			.string()
			.min(3, "Name should be at least 3 characters")
			.max(15, "Name should be less than 15 characters")
			.required("required"),
		email: yup
			.string()
			.email("Invalid email address")
			.required("required"),
		contact: yup.string().required("required"),
		address: yup.string().required("required"),
		password: yup
			.string()
			.min(5, "Password should be at least 5 characters")
			.required("required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), undefined], "Passwords must match"),
	});

	function handleSubmit(values: any) {
		console.log(values)
	}

	return (
		<div>
			<Header title="create user" subtitle="Create a New User Profile" />
			<div className="pt-6 pb-12">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ handleBlur, handleChange, values, errors, touched }) => (
						<form className="grid grid-cols-2 gap-8">
							<div>
								<input 
									type="text"
									name="firstName"
									id="firstName"
									placeholder="First Name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}
									className={`${errors.firstName && touched.firstName ? "border-red-500" : "border-[#a3a3a3] focus:border-secondary "} form-input`}
								/>
								{
									errors.firstName && touched.firstName && (
										<p className="text-red-500 text-sm capitalize pt-2">{errors.firstName}</p>
									)
								}
							</div>
							{/* LAST NAME */}
							<div>
								<input 
									type="text"
									name="lastName"
									id="lastName"
									placeholder="Last Name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastName}
									className={`${errors.lastName && touched.lastName ? "border-red-500" : "border-[#a3a3a3] focus:border-secondary"} form-input`}
								/>
								{
									errors.lastName && touched.lastName && (
										<p className="text-red-500 text-sm capitalize pt-2">{errors.lastName}</p>
									)
								}
							</div>
							{/* EMAIL */}
							<div className="col-span-2">
								<input 
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									className={`${errors.email && touched.email ? "border-red-500" : "border-[#a3a3a3] focus:border-secondary"} form-input`}
								/>
								{
									errors.email && touched.email && (
										<p className="text-red-500 text-sm capitalize pt-2">{errors.email}</p>
									)
								}
							</div>
							{/* CONTACT */}
							<div className="col-span-2">
								<input 
									type="text"
									name="contact"
									id="contact"
									placeholder="Contact Number"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.contact}
									className={`${errors.contact && touched.contact ? "border-red-500" : "border-[#a3a3a3] focus:border-secondary"} form-input`}
								/>
								{
									errors.contact && touched.contact && (
										<p className="text-red-500 text-sm capitalize pt-2">{errors.contact}</p>
									)
								}
							</div>
							{/* ADDRESS */}
							<div className="col-span-2">
								<input 
									type="text"
									name="address"
									id="address"
									placeholder="Address"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.address}
									className={`${errors.address && touched.address ? "border-red-500" : "border-[#a3a3a3] focus:border-secondary"} form-input`}
								/>
								{
									errors.address && touched.address && (
										<p className="text-red-500 text-sm capitalize pt-2">{errors.address}</p>
									)
								}
							</div>
							{/* PASSWORD */}
							<div className="col-span-2">
								<input 
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									className={`${errors.password && touched.password ? "border-red-500" : "border-[#a3a3a3] focus:border-secondary"} form-input`}
								/>
								{
									errors.password && touched.password && (
										<p className="text-red-500 text-sm capitalize pt-2">{errors.password}</p>
									)
								}
							</div>
							{/* CONFIRM PASSWORD */}
							<div className="col-span-2">
								<input 
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									placeholder="Confirm Password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.confirmPassword}
									className={`${errors.confirmPassword && touched.confirmPassword ? "border-red-500" : "border-[#a3a3a3] focus:border-secondary"} form-input`}
								/>
								{
									errors.confirmPassword && touched.confirmPassword && (
										<p className="text-red-500 text-sm capitalize pt-2">{errors.confirmPassword}</p>
									)
								}
							</div>
							<div className="col-span-2 flex justify-end">
								<button 
									type="submit"
									className="py-2 px-12 w-fite bg-secondary text-black uppercase text-base font-medium rounded space-x-3"
								>
									Submit
								</button>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default CreateNewProfile;