function Loader({isLoading}) { 
  return (
    <div className="spinner_container">
      <div className={isLoading ? `spinner spinner_visible` : `spinner`}/>
    </div>
  )
}

export default Loader;