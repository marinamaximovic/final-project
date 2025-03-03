import React, { useState, useEffect } from "react";

function Classes() {
  // state to store class data and a photo
  const [classes, setClasses] = useState<
    { id: string; name: string; description: string; photo?: string }[]
  >([]);

  // state that will handle form when addind a new class
  const [newClass, setNewClass] = useState({
    name: "",
    description: "",
    photo: "",
  });

  // fetching the class list from the API
  useEffect(() => {
    fetch("https://6799983abe2191d708b33483.mockapi.io/Classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  // adding a new class
  function addClass(e: React.FormEvent) {
    e.preventDefault();
    fetch("https://6799983abe2191d708b33483.mockapi.io/Classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClass),
    })
      .then(() => {
        // clears the form after adding
        setNewClass({ name: "", description: "", photo: "" });
        // it should fetch new data after adding a class
        return fetch(
          "https://6799983abe2191d708b33483.mockapi.io/Classes"
        ).then((res) => res.json());
      })
      .then((data) => setClasses(data));
  }

  // deleting class by its ID
  function deleteClass(id: string) {
    fetch(`https://6799983abe2191d708b33483.mockapi.io/Classes/${id}`, {
      method: "DELETE",
    }).then(() => {
      // updating the state to remove the class
      setClasses(classes.filter((item) => item.id !== id));
    });
  }

  return (
    <div className="container mt-5">
      <h2>Our Classes</h2>
      {/*display the list of classes */}
      <div className="mt-4">
        {classes.map((c: any, index: number) => (
          <div key={c.id} className="row mb-5 align-items-center">
            {index % 2 === 0 ? (
              // even: photo on left, text on right
              <>
                <div className="col-md-6">
                  {c.photo && (
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="img-fluid w-100"
                    />
                  )}
                </div>
                <div className="col-md-6">
                  <h4 style={{ marginBottom: "20px" }}>{c.name}</h4>
                  <p>{c.description}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteClass(c.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              // odd: text on left, photo on right
              <>
                <div className="col-md-6">
                  <h4 style={{ marginBottom: "20px" }}>{c.name}</h4>
                  <p>{c.description}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteClass(c.id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="col-md-6">
                  {c.photo && (
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="img-fluid w-100"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {/*form for adding a new class*/}
      <div className="mt-4">
        <form onSubmit={addClass}>
          <div className="mb-3">
            <label>Class Name</label>
            <input
              type="text"
              className="form-control"
              value={newClass.name}
              onChange={(e) =>
                setNewClass({ ...newClass, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={newClass.description}
              onChange={(e) =>
                setNewClass({ ...newClass, description: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label>Photo URL</label>
            <input
              type="text"
              className="form-control"
              value={newClass.photo}
              onChange={(e) =>
                setNewClass({ ...newClass, photo: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
}

export default Classes;
