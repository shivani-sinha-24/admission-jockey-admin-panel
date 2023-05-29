import React from 'react'
// import CloseIcon from '@mui/icons-material/Close';

export function ImagePreviewCard({preview,setFile,setPreview,setStudent,student}) {
    const [expanded, setExpanded] = React.useState(true);  
    const closeImgPrev = ()=>{
      setShow(false);
      setPreview(null);
      setFile(null);
    }
    const [show, setShow] = React.useState(true);
    return (
      <>
        {show?<div
                className="card p-0 my-6  col-lg-4 "
                style={{width:'object-fit',height:'object-fit'}}
              >
                  <div className="card-header ">
                    <h3 className="card-title">Image</h3>
                    <div className="rtlcards ">
                      <button
                        size="small"
                        edge="start"
                        color="inherit"
                        onClick={(e)=> {e.preventDefault();closeImgPrev()}}
                        aria-label="close"
                      >X
                        {/* <CloseIcon fontSize="small"/> */}
                      </button>
                      </div>
                  </div>
                    <div className="card-body py-3">
                      <img
                        src={preview}
                        alt="preview"
                        style={{
                          width: "120%",
                          maxHeight: "100px",
                          border:"none",
                          objectFit:"cover"
                        }}
                      />
                    </div>
                </div>:null}
      </>
    );
  }
