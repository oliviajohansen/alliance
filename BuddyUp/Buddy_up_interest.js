import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { List, Divider } from "react-native-paper";
import { BuddyUpInterestData } from "../data";

const Buddy_up_interest = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://eriehouse.org/wp-content/uploads/2020/02/SW-Headshot-e1582832304774.jpg",
          }}
          style={styles.profilePic}
        />
        <View style={styles.line} />
        <Image
          source={{
            uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ8PDw8QDg0QDw8ODg0PDQ8PDQ4NFREWFhcRExUYHSggGBolGxUWIT0hJSkrLi4uFyAzODMsNyguOjcBCgoKDg0OFQ8QFS0dFR0tKystLSs3NysrLSsrKystKystKys3Ky0tKy0tOCssKzcuKysrKy0rKystLSs3LS0rK//AABEIANcA6wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgYDBAUBBwj/xABKEAACAQICBgYGBAkKBwAAAAAAAQIDEQQFBhIhMUFRE2FxgZGxByIyUnKhI0Ji8BQWM4KywcLD0RWEhZKis9LT4vFDVFVkg5Ok/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAAMBAAAAAAAAAAAAAAABEQISITH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa1bGwi9VXnNb4wV2u17l3sYNkHOlWrS4xpLlFa8/6z2fIg8JCW2adR86jc/BPYu5G+lZ7RtTzCinZ1YN+7F60vBbSH8p0uVV9mHrv9kQgkrJJLklZE0i9YnZj/AJVorf0kfioVorxcTPh8ZSqfk6kJviozTa7VwCRir4GlU9uEW+ErWknzTW1Gch2bgOZ0dejthJ4inxp1H9Kl9mfHsfibmDxcKsdaD3O0otWnCXKS4EsalZwARQAAAAAAAAAAAAAAAAAAAAAI1aiinKTsl97dYnNRTbdklds58pOctaWy3sR91c39r/bt1x46luPatWdTfeEPdTtOXxNbuxeIhBJWSSS3JKyJJEkjr5HPdEiSQSJpGbR4kTSCRJIzaCR6egysgaOOwjUumo7K0VtX1asfdkb56JcaxgweKjVgpx7JRe+MlvizOcDM6ksJXVeKbozsq8Fxj7y+0r367tHco1YzjGcWpQklKMltTT3NCxYmACKAAAAAAAAAAAAAAAAAGOvV1IOW+y2LnLcl3uwGri6mtLV+rGzfXPel3eb6iKMdNWXN72+be9+JlR2kyOdupJEkjxEr2JUSSIPEQW+cfFFF0h04gq8sNh2pOLcalV7acZcYRX1mue5de0qeeYrMKicoYmpq+7Tah5bTF5Nzi+1UqkZezJStvs07GU/OWVaTZlgcRGp01StTT9ejWk57OOrJ7V2bn8z9C5fi416FKtD2KtOFSPwyin+shZjYPQAsegAitLN6CnRaK9kWYPDVOhqP6CcvUk91Ko3u+Fvwfay11rarvuKrmGDUk9l7l0i2g4+jWMlOk6U23UpWV3vlTfst83st3LmdggAAAAAAAAAAAAAAAAGhmdTbThzbm+yOxLxkn3G+cPMKt8RPlGMId+2T+Uo+BeP1L8Z4yMkWakJmaMzqw2Ys4Gm+aPD4NqEtWrWfQwkt8U03KS61FPvaO3GR849JGNcsZSpcKVNy6tacreUF4meSxWqeWxbTirHewVFqNmamWSTtc70Iqxzrbm18DCW+KfcfRtFKThl+Fi9lqMWlyi9sV4NFSwGXvEVo017PtVZL6tLj3vcvHgy/xaSSSskrJLclyLInKsh6QUiVwmpA8uLkacfSrGOjhZtOzcZK/K61fNo5WBzGNaO/aafpBxblBUova2m/hTuvmVDK8xlSlZ7CVY+jZctTExa3STg+x7V80ixlNyjHKpOnt268P0kXIQoACoAAAAAAAAAAAAABws5yKpVnKrRqwhOVm41KWvFtRS3pprcuZ3QB84zDC5rQu3h6dWK+vQTqL+rfW+RxXpNiE2nGCa2NOEk0+tXPsJqY/LMPiFatRp1eTlBOS7Jb13AfKlpTX5U/CX8TlZniZYmtKtUa15KKdt1krfftPoeY+jzDTu6FSpQlwi/pafg/W+ZyH6OcRwxFJ9sZoClwlKG1HZyTEVsRVjRpx1pvbd7Ixit8pPgl99p0sXoJiqUbuth3d2jHWqKUpcl6v+xY8iyynhKWpC0qkrOrVtZ1JLyittl+tssha62WYSFCnqR2ye2dRqznLn1LkuBuKoaSqklUNM43VMkpmkqhNVAN1TNbMcbGlTlKTskvHqISrqMXJuySu3yKRnubOvOy2Uov1Vz6zNWRpY/EOtUlOW+T2dS5HKxeFT2rebrZFmWmxoPKpLH0qTu4rWqSfKMFfzsu8+sFU0Eyro6c8TJWnVWrT5qkntfe/wBFFrEAAFQAAAAAAAAAAAAAAAAAAAhWqxhFyk7RSu3+pc31Eyq6Q5nr1XSi/Upu0nzqcfDd23AYnGupNyfZFX2Qj7q82+L6kjyNU5sKhmjULqOhGqTVQ0YzMkZjRuqoZFNJOTdorfJ7kalNqzlJ6sI7ZSfl2lazvOXWepT9Wity97rY0xlz7O3WfR09lJf22cXWIXFzLSdztaM5I8VU1pJrDwfrvdrv3E/Pl3mLR7Ip4ud3eFCL9epxf2Yc35H0jC4eFKEadOKjCKtGK4BGSMUkkkkkrJJWSXJHoBQAAAAAAAAAAAAAAAAAAAAAauaYvoMPVq73CDcV7090Y97su8+eU5Pi7t7XJ73J72+1ls03q2wsIcKlenF/mqVTzpoqMEBtQkZoSNeCM0EQbEZGzh4az32SV5S5R5mrBE83qOlhYxWydbbJ8dTh8vMo5GfZr0r6Onsox2fE+bOOZnSIuBFY7nd0a0enipa87wwye2W6VRr6sf4mHR3J3iq+q7qlD1qslv1eEV1v9TPplGlGEYwglGEUoxilZJLgio8oUY04RhCKjCKtGKVkkZAAAAAAAAAAAAAAAAAAAAAAAAAAKzpttjh19ucvCFv2iuQgXnNcsWI1PWUXDWteGuvWtwv1HOlo5PhXprtwqf7YFehAzQgdeWjmI4Yqiu3A3/eGN6OYzhjcOv6Nb/fBWnCBraS1F00Y8IwSX37jp/i5j/8AqGHX9Fv/ADzHiND61WWvVxkJVLWcoYNwT67dKyIqzsQdi0fiI/8Am/8A5/8AWPxE/wC7f/o/1hXS0Iw6jhXPjUqSd+qPqpeKfiWE0smy/wDBsPCjr9Jqa/r6urfWm5br9ZulQAAAAAAAAAAAAAAAAAAAAAAAAAAGtiswoUnarWp03a9p1Ixdudmc3EaW5dT9vGUV+dreRDNleu/ghx65Gr0ae9J9qTL4MVf0lZNDfjLv7OGxM/moGnV9LOTrdWqz+HC1l+kkdL8Fg98IPtpU35o8eW0Xvo0X24ej/hJ4euXH0t5Q/r11/NpmSPpXyh/8Wsv5rWfkjeeR4R+1hcM+3DUf8Jx8/wAtoUNRUKNKipXcuipQp6zstrstoHSh6S8rluniX8OXY2XlTNyjpxl89066+LA4uHnApLRBxIPqOW5pRxMZSozc1FpSvCcGnblJI3Cp6Afk66+3B/JlsKAAAAAAAAAAAAAAAAAAAAAAAAAAA4eYq9efZBfIxKJmxv5ep+b+iiCIr1RJpHkSaA9SK/pZvp9/kixIrml720+/yArrZFshKZBzAuno/fq4jtpeUi3FN9Hcr/hX/h/eFyKgAAAAAAAAAAAAAAAAAAAAAAAAARlKwHFxj+nq/FH+7iRTIYqp9PW+OP8AdQIqZFbCZNM1lUJKoBsplY0yl+T7/IsKqFV02q26PtfkVFflMxSmadTF2GG6Ws7UoOXOW6C7WRV39H+J1XietUf2y5rElG0Ywk8NrubUpTUbqKajG19z47y0Uq1+BUdNVySrGpBmeKAzKoSUyEYk1ECSkSTPFE9sB6AAAAAAAAAAAAAAAARkSPGgOJmORUK03UnGWu7XlGrUheystkWluRz56OJexXxEOpVIyX9qLLS4EXTAqksmxK9jF36qlBSfipIg8Lj47vwep2yqU34arLZ0R50QFU6bGR9rCOXXTq02vm0zkaQ4DE4tU1Tw9WMk3rKpHUjHr1tzXZc+h9GNQD5zl+g7VpV/pJe7upr+P32Fiw+TKKSSSS3JKySLJqDUA49PL7GzTwtjoah7qAasKRmjAyqJJRAjFE0LHoAAAAAAAAAAAAAAAAAAAAAAAAA8segDywsAAsLAALCwAHoAAAAAAAAAAAAD/9k=",
          }}
          style={styles.profilePic}
        />
      </View>
      <Text style={styles.title}>Your interests matched with:</Text>
      <FlatList
        data={BuddyUpInterestData.filter((b) => b.id < 6)}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
          //onPress={() => navigation.navigate('Chat Room', { roomId: item.id })}
          >
            <List.Item
              title={item.name}
              description={item.common}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
      <Text style={styles.title}>Similar Interests:</Text>
      <FlatList
        data={BuddyUpInterestData.filter((b) => b.id >= 6)}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
          //onPress={() => navigation.navigate('Chat Room', { roomId: item.id })}
          >
            <List.Item
              title={item.name}
              description={item.common}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
// <View>
//     <Text>This is buddy up industry</Text>
//     <Button title="this is view profile" onPress={() => navigation.navigate('View Profile')}></Button>
// </View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    padding: 10,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    justifyContent: "center",
  },
  line: {
    width: 50,
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Buddy_up_interest;
