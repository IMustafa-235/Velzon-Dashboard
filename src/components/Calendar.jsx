import * as React from 'react';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function BasicDateCalendar({value, setValue}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
       value={value}
        onChange={(newValue) => setValue(newValue)}
        sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '7px',
            padding: '10px',
            width: '280px',
            margin:"0",
            boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
            height:"305px",
            position:"absolute",
            top:"110%",
            left:"0",
            '& .MuiPickersCalendarHeader-label': {
              color: 'black',
              fontSize: '18px',
              fontWeight: 'bold',
            },
            '& .MuiPickersArrowSwitcher-button': {
              color: 'black',
            },
            '& .MuiDayCalendar-weekDayLabel': {
              color: '#aaa',
              fontWeight: 600,
              height:"20px"
            },
            '& .MuiPickersDay-root': {
              color: 'black',
              fontSize: '14px',
              borderRadius: '10px',
  
              '&:hover': {
                backgroundColor: '#333',
              },
            },
            '& .Mui-selected': {
              backgroundColor: '#405189 !important',
              color: '#fff',
              fontWeight: 'bold',
            },
            '& .MuiPickersDay-today': {
              border: '1px solid #405189',
            },
            '& .MuiPickersCalendarHeader-root ': {
              marginTop:"0px"
            },
          }}


      />
    </LocalizationProvider>
  );
}

export default BasicDateCalendar