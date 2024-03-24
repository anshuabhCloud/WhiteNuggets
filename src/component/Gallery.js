
function Profile({name, age}){
    return (
        <div>
        <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
        <p1>name is {name.firstname} {name.secondname}</p1>
        </div>
      );
}
function Gallery(){
    const name = {
        firstname: "John",
        secondname: "Singh"
    }
    return (
        <div>
            <section>
                <h1>Gallery</h1>
                {/* <Profile name={firstname="John" secondname="singh"} age={25} /> */}
                <Profile name={name} age={25} />
                <Profile name={name} />
                <Profile name="Jane" age={30} />
                <Profile name="Bob" age={35} />
            </section>
            <Profile name="Alice" age={28} />
         </div>
    )
}
export default Gallery;
