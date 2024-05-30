
# REST API for VelTech University
Hurryy, a good news for all techy from VelTech University.
So i have made your job too easy by creating end to end REST API for all the events that are going in our campous.

So start your progress in frontend development, i will take care of your backend.


## Tech Stack

**Client:** Depends  on developer needs

**Server:** Node, Express


## API Details

#### Home Route.
```http
  GET / -- Displays Owner info.
```

#### Get all items.

```http
  GET /events --> Get all the events from database.
```


#### Get event by Id.

```http
  GET /event/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Add a event to database.
```http
  POST /event
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Event details`| `Json` | **Required**. Event details in Json format |

#### Updates event by Id.
```http
  put /event/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`| `String` | **Required**. Updated details in Json format |

#### Delete event by Id.
```http
  Delete /event/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`| `String` | **Required**. Updated details in Json format |

## How to use

Base Url - "https://events-api-veltech.vercel.app/"

Steps to use :

1. Use this base url for your project.
2. Use the end points to perform logics.
3. Hurry, You are all set to go.



## Future Enhancement

This is basic crud api for testing and learning purpose.
1. Soon i will be adding auth with JWT tokens to access this.
2. Secure auth feature with hashed password.
3. Seperate apies for different filter and sort methods.
4. After Enhancement you can only access it if you are authorised admin
5. Seperate login and signup end points for users and admins with token verifications.



## Authors

- [@Himanshu](https://www.linkedin.com/in/okay-anshu/)


## Feedback

If you have any feedback, please mail me at "himanshu.is.dev@gmail.com"


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://okay-anshu.web.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/okay-anshu/)
