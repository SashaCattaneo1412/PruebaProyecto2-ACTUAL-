 import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';
 import style from '../styles/Registrarse.module.css'

 const Registrarse = () => {
   return (
     
        <main className={style.contenedor}>
        <form>
          <h1 className={style.title}>CREA TU CUENTA</h1>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Nombre" />
          </div>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Apellido" />
          </div>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="nombre@ejemplo.com" />
          </div>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Nombre de Usuario" />
          </div>
           
            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
            </div>

            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Repita la Contraseña" />
            </div>

            <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Nombre del Responsable" />
            </div>

            <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Telefono del Responsable" />
            </div>

         <div>
            <label>
              <input type="checkbox" value="remember-me" /> RECORDAR
            </label>
          </div>

          <div>
            <label className={style.seguimiento}>
            Hay alguna persona que te hará un seguimiento en tu app?
            </label>
          </div>


          <button className="w-100 btn btn-lg btn-primary" type="submit">REGISTARSE</button>
        </form>
      </main>

   )
 }
 
 export default Registrarse
 