import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GiOfficeChair } from "react-icons/gi";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
    try {
        console.log(data);
        
        // Check if file exists and is of type File
        const file = data.image[0];
        if (!file || !(file instanceof File)) {
            throw new Error("Invalid file format.");
        }

        // Create FormData to send image
        const formData = new FormData();
        formData.append('image', file);

        // Upload image to ImgBB
        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            // Prepare menu item data
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };

            // Send menu item data to the server
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);

            if (menuRes.data.insertedId) {
                // Show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    } catch (error) {
        console.error('Error adding item:', error);
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to add item.",
            text: error.message,
            showConfirmButton: true,
        });
    }
};


    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        {errors.name && <p className="text-red-500">Name is required.</p>}
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Side">Side</option>
                                <option value="Lounge">Lounge</option>
                                <option value="Rocking">Rocking</option>
                            </select>
                            {errors.category && <p className="text-red-500">Category is required.</p>}
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                            {errors.price && <p className="text-red-500">Price is required.</p>}
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        {errors.image && <p className="text-red-500">Image is required.</p>}
                    </div>

                    <button className="btn">
                        Add Item <GiOfficeChair className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
