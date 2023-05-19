import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState();
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        //

        const remaining = myToys.filter((toy) => toy._id !== id);
        setMyToys(remaining);
      }
    });
  };
  console.log(myToys);
  return (
    <div>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 ">ALL My Jobs</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full lg:w-10/12 mx-auto">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Toy Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys?.map((toy, index) => (
                <tr className="" key={toy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="block rounded-full w-14"
                      src={toy.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>{toy.toyName}</td>

                  <td>{toy.quantity}</td>
                  <td>{toy.price}</td>
                  <td>
                    <button className="btn btn-sm">Edit</button>
                  </td>
                  <td>
                    {" "}
                    <button onClick={() => handleDelete(toy._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
