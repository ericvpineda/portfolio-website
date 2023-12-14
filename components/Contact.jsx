import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@mui/material";

export default function Contact() {
  return (
    <div className="section flex-col md:mt-15" id="contact">
      <div className="text-center mb-10">
        <div className="section_text">Lets chat over coffee</div>
        <div className="header_title">Contact Me</div>
      </div>

      <a href="mailto:ericvpineda@berkeley.edu">
      <div className="flex items-center border-2 border-gray-400 border-solid rounded-full p-2">
        <IconButton >
          <SendIcon sx={{height: "2rem", width: "2rem", color: "#b9182f"}}/>
        </IconButton>
        <div className="my-3 md:my-4 font-semibold text-lg sm:text-3xl tracking-normal text-[#495057]" >ericvpineda@berkeley.edu</div>
      </div>
      </a>
    </div>
  );
}
