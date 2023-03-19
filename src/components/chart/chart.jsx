import { ResponsiveCalendar } from '@nivo/calendar'

export const MyResponsiveCalendar = ({ data }) => {
    console.log(data)
    return (
        <div style={{height: 3300}}>
            <ResponsiveCalendar
        data={data}
        from="1999-02-25"
        to="2022-07-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
        </div>
    
)}