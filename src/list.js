import signup from './signup.jpg'
import home from './homepage.jpg'
import important from './Important.png'
import login from './login.jpg'
import not_urgent from './Not-Urgent.png'
import panther_paw from './Panther-Paw.png'
import urgent from './Urgent.png'
// import './detail.css';
import './list.css';
import tasks from './tasks.json'
import { signOut } from 'firebase/auth'
import {auth,provider} from "./FirebaseConfiguration";
import { useContext } from 'react';
import AuthContext from './Hooks/useAuth';

function List() {
  const { user } = useContext(AuthContext);
  console.log("List:", user)
  //   var Placeholder = 'Login';
  if (user) {
    var Placeholder = user.email;
    console.log(Placeholder);
  }
  //   const [setUser] = useState({});
  const handleLogout = async () => {
    signOut(auth).then(() => {
      //setUser({})
    })
  }
  return (
    <div className="List">
        {/* <body> */}
            <header className="banner">
                <div className="top">
                    <h1>Welcome to our To-Do List App</h1>
                </div>
                <img className="paw" src={panther_paw} alt="Paw"/>
                <nav className="loginname">
                    <ul>
                        {user? (
                            <>
                                <input readOnly type="text" id="myText" name="search" placeholder={Placeholder} />
                            </>
                        ) : (
                            <></>
                        )}
                    </ul>
                </nav>
                <nav className="usernav">
                    <ul className="userul">
                        {user? (
                            <div>
                                {/* <li><button onClick={handleLogout}>LOGOUT</button></li> */}
                                <li> <a onClick={handleLogout}>LOGOUT</a></li>
                            </div>
                        ) : (
                            <>
                                <li> <a href="/newUser">SIGN UP</a></li>
                                <li> <a href="/newUser">LOGIN</a></li>
                            </>
                        )}
                    </ul>
                </nav>
                <nav>
                    <ul className="gennav">
                        <li> <a href="/">HOME</a></li>
                        <li> <a href="/list">MY TO DO LIST</a></li>
                        <li> <a href="/createNew">CREATE NEW TASK</a></li>
                        {/* <!---<li> <a href="list">About</a></li>---> */}
                    </ul>
                </nav>
            </header>
            <article>
                <section>
                    <h1>TO DO List</h1>
                    <br/>
                    <h2>Item Categories</h2>
                    <div className='detailparent'>
                        <div className='detailcard'>
                            <img className="images" src={urgent} alt="Task1"/>
                            URGENT!
                        </div>
                        <div className='detailcard'>
                            <img className="images" src={important} alt="Task3"/>
                            Important
                        </div>
                        <div className='detailcard'>
                            <img className="images" src={not_urgent} alt="Task2"/>
                            Not Urgent
                        </div>
                        {
                            tasks.map( (task,index) => {
                                if (index%3 === 0) {
                                    return(
                                        <div className="detailcard">
                                            <div className="container">
                                                <a href="/list">
                                                    <h1><b>{task.title}</b></h1> 
                                                    <p>Category: {task.Category}</p> 
                                                    <p><b>Due Date: {task.Due}</b></p>
                                                    <p>Location: {task.Location}</p>
                                                    <p className="status">Staus: {task.status}</p>
                                                    <br/>
                                                    <p>Description: </p>
                                                    <p>{task.content}</p><br/><br/>
                                                </a>
                                                <nav>
                                                    <ul className="listnav">
                                                        <li> <a href="/detail">UPDATE</a></li>
                                                        <li> <a href="/detail">DELETE</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )
                                }
                                else{
                                    return(
                                        <div className="detailcard">
                                            <div className="container">
                                                <a href="/list">
                                                    <h1><b>{task.title}</b></h1> 
                                                    <p>Category: {task.Category}</p> 
                                                    <p><b>Due Date: {task.Due}</b></p>
                                                    <p>Location: {task.Location}</p>
                                                    <p className="status">Staus: {task.status}</p>
                                                    <br/>
                                                    <p>Description: </p>
                                                    <p>{task.content}</p><br/><br/>
                                                </a>
                                                <nav>
                                                    <ul className="listnav">
                                                        <li> <a href="/detail">UPDATE</a></li>
                                                        <li> <a href="/detail">DELETE</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </section>
            </article>

       

            <footer>© 2023 Milestone 2</footer>
        {/* </body> */}

    </div>
  );
}

export default List;
