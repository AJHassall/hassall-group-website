import { Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';
import classes from './reviews.module.css'
import reviewsJson from './Reviews.json'
export default function reviews(){

    const reviewsHtml = reviewsJson.map(el=>{
        return(
            
            <Paper withBorder radius="md" className={classes.comment} key={el.id}>
            <Group>
                {/* <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
                /> */}
                <div>
                <Text fz="sm">{el.Author}</Text>
                <Text fz="xs" c="dimmed">
                    {el.Date}
                </Text>
                </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
                <div
                className={classes.content}
                >
                    <p>
                        {el.Review}
                    </p>
                </div>
            </TypographyStylesProvider>
            </Paper>
            
        )
    })

    return(
        <>
            {reviewsHtml}
        </>
    )
}