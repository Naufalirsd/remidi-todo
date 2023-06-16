import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function taskReducer(tasks, action) {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                { id: action.id, text: action.text, done: false },
            ];
        }
        case "deleted": {
            return tasks.filter((t) => t.id !== action.id);
        }
        case "changed": {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        default: {
            throw Error("Action Not Found" + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    {
        id: 1,
        done: false,
        text: "delectus aut autem",
        userId: 1,
    },
    {
        id: 2,
        done: false,
        text: "quis ut nam facilis et officia qui",
        userId: 1,
    },
    {
        id: 3,
        done: false,
        text: "fugiat veniam minus",
        userId: 1,
    },
    {
        id: 4,
        done: true,
        text: "et porro tempora",
        userId: 1,
    },
    {
        id: 5,
        done: false,
        text: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        userId: 1,
    },
    {
        id: 6,
        done: false,
        text: "qui ullam ratione quibusdam voluptatem quia omnis",
        userId: 1,
    },
    {
        id: 7,
        done: false,
        text: "illo expedita consequatur quia in",
        userId: 1,
    },
    {
        id: 8,
        done: true,
        text: "quo adipisci enim quam ut ab",
        userId: 1,
    },
    {
        id: 9,
        done: false,
        text: "molestiae perspiciatis ipsa",
        userId: 1,
    },
    {
        id: 10,
        done: true,
        text: "illo est ratione doloremque quia maiores aut",
        userId: 1,
    },
    {
        id: 11,
        done: true,
        text: "vero rerum temporibus dolor",
        userId: 1,
    },
    {
        id: 12,
        done: true,
        text: "ipsa repellendus fugit nisi",
        userId: 1,
    },
    {
        id: 13,
        done: false,
        text: "et doloremque nulla",
        userId: 1,
    },
    {
        id: 14,
        done: true,
        text: "repellendus sunt dolores architecto voluptatum",
        userId: 1,
    },
    {
        id: 15,
        done: true,
        text: "ab voluptatum amet voluptas",
        userId: 1,
    },
    {
        id: 16,
        done: true,
        text: "accusamus eos facilis sint et aut voluptatem",
        userId: 1,
    },
    {
        id: 17,
        done: true,
        text: "quo laboriosam deleniti aut qui",
        userId: 1,
    },
    {
        id: 18,
        done: false,
        text: "dolorum est consequatur ea mollitia in culpa",
        userId: 1,
    },
    {
        id: 19,
        done: true,
        text: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        userId: 1,
    },
    {
        id: 20,
        done: true,
        text: "ullam nobis libero sapiente ad optio sint",
        userId: 1,
    },
    {
        id: 21,
        done: false,
        text: "suscipit repellat esse quibusdam voluptatem incidunt",
        userId: 2,
    },
    {
        id: 22,
        done: true,
        text: "distinctio vitae autem nihil ut molestias quo",
        userId: 2,
    },
    {
        id: 23,
        done: false,
        text: "et itaque necessitatibus maxime molestiae qui quas velit",
        userId: 2,
    },
    {
        id: 24,
        done: false,
        text: "adipisci non ad dicta qui amet quaerat doloribus ea",
        userId: 2,
    },
    {
        id: 25,
        done: true,
        text: "voluptas quo tenetur perspiciatis explicabo natus",
        userId: 2,
    },
    {
        id: 26,
        done: true,
        text: "aliquam aut quasi",
        userId: 2,
    },
    {
        id: 27,
        done: true,
        text: "veritatis pariatur delectus",
        userId: 2,
    },
    {
        id: 28,
        done: false,
        text: "nesciunt totam sit blanditiis sit",
        userId: 2,
    },
    {
        id: 29,
        done: false,
        text: "laborum aut in quam",
        userId: 2,
    },
    {
        id: 30,
        done: true,
        text: "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        userId: 2,
    },
    {
        id: 31,
        done: false,
        text: "repudiandae totam in est sint facere fuga",
        userId: 2,
    },
    {
        id: 32,
        done: false,
        text: "earum doloribus ea doloremque quis",
        userId: 2,
    },
    {
        id: 33,
        done: false,
        text: "sint sit aut vero",
        userId: 2,
    },
    {
        id: 34,
        done: false,
        text: "porro aut necessitatibus eaque distinctio",
        userId: 2,
    },
    {
        id: 35,
        done: true,
        text: "repellendus veritatis molestias dicta incidunt",
        userId: 2,
    },
    {
        id: 36,
        done: true,
        text: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
        userId: 2,
    },
    {
        id: 37,
        done: false,
        text: "sunt cum tempora",
        userId: 2,
    },
    {
        id: 38,
        done: false,
        text: "totam quia non",
        userId: 2,
    },
    {
        id: 39,
        done: false,
        text: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
        userId: 2,
    },
    {
        id: 40,
        done: true,
        text: "totam atque quo nesciunt",
        userId: 2,
    },
    {
        id: 41,
        done: false,
        text: "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
        userId: 3,
    },
    {
        id: 42,
        done: false,
        text: "rerum perferendis error quia ut eveniet",
        userId: 3,
    },
    {
        id: 43,
        done: true,
        text: "tempore ut sint quis recusandae",
        userId: 3,
    },
    {
        id: 44,
        done: true,
        text: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
        userId: 3,
    },
    {
        id: 45,
        done: false,
        text: "velit soluta adipisci molestias reiciendis harum",
        userId: 3,
    },
    {
        id: 46,
        done: false,
        text: "vel voluptatem repellat nihil placeat corporis",
        userId: 3,
    },
    {
        id: 47,
        done: false,
        text: "nam qui rerum fugiat accusamus",
        userId: 3,
    },
    {
        id: 48,
        done: false,
        text: "sit reprehenderit omnis quia",
        userId: 3,
    },
    {
        id: 49,
        done: false,
        text: "ut necessitatibus aut maiores debitis officia blanditiis velit et",
        userId: 3,
    },
    {
        id: 50,
        done: true,
        text: "cupiditate necessitatibus ullam aut quis dolor voluptate",
        userId: 3,
    },
    {
        id: 51,
        done: false,
        text: "distinctio exercitationem ab doloribus",
        userId: 3,
    },
    {
        id: 52,
        done: false,
        text: "nesciunt dolorum quis recusandae ad pariatur ratione",
        userId: 3,
    },
    {
        id: 53,
        done: false,
        text: "qui labore est occaecati recusandae aliquid quam",
        userId: 3,
    },
    {
        id: 54,
        done: true,
        text: "quis et est ut voluptate quam dolor",
        userId: 3,
    },
    {
        id: 55,
        done: true,
        text: "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
        userId: 3,
    },
    {
        id: 56,
        done: true,
        text: "deleniti ea temporibus enim",
        userId: 3,
    },
    {
        id: 57,
        done: false,
        text: "pariatur et magnam ea doloribus similique voluptatem rerum quia",
        userId: 3,
    },
    {
        id: 58,
        done: false,
        text: "est dicta totam qui explicabo doloribus qui dignissimos",
        userId: 3,
    },
    {
        id: 59,
        done: false,
        text: "perspiciatis velit id laborum placeat iusto et aliquam odio",
        userId: 3,
    },
    {
        id: 60,
        done: true,
        text: "et sequi qui architecto ut adipisci",
        userId: 3,
    },
    {
        id: 61,
        done: true,
        text: "odit optio omnis qui sunt",
        userId: 4,
    },
    {
        id: 62,
        done: false,
        text: "et placeat et tempore aspernatur sint numquam",
        userId: 4,
    },
    {
        id: 63,
        done: true,
        text: "doloremque aut dolores quidem fuga qui nulla",
        userId: 4,
    },
    {
        id: 64,
        done: false,
        text: "voluptas consequatur qui ut quia magnam nemo esse",
        userId: 4,
    },
    {
        id: 65,
        done: false,
        text: "fugiat pariatur ratione ut asperiores necessitatibus magni",
        userId: 4,
    },
    {
        id: 66,
        done: false,
        text: "rerum eum molestias autem voluptatum sit optio",
        userId: 4,
    },
    {
        id: 67,
        done: false,
        text: "quia voluptatibus voluptatem quos similique maiores repellat",
        userId: 4,
    },
    {
        id: 68,
        done: false,
        text: "aut id perspiciatis voluptatem iusto",
        userId: 4,
    },
    {
        id: 69,
        done: false,
        text: "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
        userId: 4,
    },
    {
        id: 70,
        done: false,
        text: "ut sequi accusantium et mollitia delectus sunt",
        userId: 4,
    },
    {
        id: 71,
        done: false,
        text: "aut velit saepe ullam",
        userId: 4,
    },
    {
        id: 72,
        done: false,
        text: "praesentium facilis facere quis harum voluptatibus voluptatem eum",
        userId: 4,
    },
    {
        id: 73,
        done: true,
        text: "sint amet quia totam corporis qui exercitationem commodi",
        userId: 4,
    },
    {
        id: 74,
        done: false,
        text: "expedita tempore nobis eveniet laborum maiores",
        userId: 4,
    },
    {
        id: 75,
        done: false,
        text: "occaecati adipisci est possimus totam",
        userId: 4,
    },
    {
        id: 76,
        done: true,
        text: "sequi dolorem sed",
        userId: 4,
    },
    {
        id: 77,
        done: false,
        text: "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
        userId: 4,
    },
    {
        id: 78,
        done: false,
        text: "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
        userId: 4,
    },
    {
        id: 79,
        done: true,
        text: "eum ipsa maxime ut",
        userId: 4,
    },
    {
        id: 80,
        done: true,
        text: "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
        userId: 4,
    },
    {
        id: 81,
        done: true,
        text: "suscipit qui totam",
        userId: 5,
    },
    {
        id: 82,
        done: false,
        text: "voluptates eum voluptas et dicta",
        userId: 5,
    },
    {
        id: 83,
        done: true,
        text: "quidem at rerum quis ex aut sit quam",
        userId: 5,
    },
    {
        id: 84,
        done: false,
        text: "sunt veritatis ut voluptate",
        userId: 5,
    },
    {
        id: 85,
        done: true,
        text: "et quia ad iste a",
        userId: 5,
    },
    {
        id: 86,
        done: true,
        text: "incidunt ut saepe autem",
        userId: 5,
    },
    {
        id: 87,
        done: true,
        text: "laudantium quae eligendi consequatur quia et vero autem",
        userId: 5,
    },
    {
        id: 88,
        done: false,
        text: "vitae aut excepturi laboriosam sint aliquam et et accusantium",
        userId: 5,
    },
    {
        id: 89,
        done: true,
        text: "sequi ut omnis et",
        userId: 5,
    },
    {
        id: 90,
        done: true,
        text: "molestiae nisi accusantium tenetur dolorem et",
        userId: 5,
    },
    {
        id: 91,
        done: true,
        text: "nulla quis consequatur saepe qui id expedita",
        userId: 5,
    },
    {
        id: 92,
        done: true,
        text: "in omnis laboriosam",
        userId: 5,
    },
    {
        id: 93,
        done: true,
        text: "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
        userId: 5,
    },
    {
        id: 94,
        done: false,
        text: "facilis modi saepe mollitia",
        userId: 5,
    },
    {
        id: 95,
        done: true,
        text: "vel nihil et molestiae iusto assumenda nemo quo ut",
        userId: 5,
    },
    {
        id: 96,
        done: false,
        text: "nobis suscipit ducimus enim asperiores voluptas",
        userId: 5,
    },
    {
        id: 97,
        done: false,
        text: "dolorum laboriosam eos qui iure aliquam",
        userId: 5,
    },
    {
        id: 98,
        done: true,
        text: "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
        userId: 5,
    },
    {
        id: 99,
        done: false,
        text: "neque voluptates ratione",
        userId: 5,
    },
    {
        id: 100,
        done: false,
        text: "excepturi a et neque qui expedita vel voluptate",
        userId: 5,
    },
    {
        id: 101,
        done: false,
        text: "explicabo enim cumque porro aperiam occaecati minima",
        userId: 6,
    },
    {
        id: 102,
        done: false,
        text: "sed ab consequatur",
        userId: 6,
    },
    {
        id: 103,
        done: false,
        text: "non sunt delectus illo nulla tenetur enim omnis",
        userId: 6,
    },
    {
        id: 104,
        done: false,
        text: "excepturi non laudantium quo",
        userId: 6,
    },
    {
        id: 105,
        done: true,
        text: "totam quia dolorem et illum repellat voluptas optio",
        userId: 6,
    },
    {
        id: 106,
        done: true,
        text: "ad illo quis voluptatem temporibus",
        userId: 6,
    },
    {
        id: 107,
        done: false,
        text: "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
        userId: 6,
    },
    {
        id: 108,
        done: true,
        text: "a eos eaque nihil et exercitationem incidunt delectus",
        userId: 6,
    },
    {
        id: 109,
        done: true,
        text: "autem temporibus harum quisquam in culpa",
        userId: 6,
    },
    {
        id: 110,
        done: true,
        text: "aut aut ea corporis",
        userId: 6,
    },
    {
        id: 111,
        done: false,
        text: "magni accusantium labore et id quis provident",
        userId: 6,
    },
    {
        id: 112,
        done: false,
        text: "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
        userId: 6,
    },
    {
        id: 113,
        done: false,
        text: "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
        userId: 6,
    },
    {
        id: 114,
        done: false,
        text: "cupiditate quos possimus corporis quisquam exercitationem beatae",
        userId: 6,
    },
    {
        id: 115,
        done: false,
        text: "sed et ea eum",
        userId: 6,
    },
    {
        id: 116,
        done: true,
        text: "ipsa dolores vel facilis ut",
        userId: 6,
    },
    {
        id: 117,
        done: false,
        text: "sequi quae est et qui qui eveniet asperiores",
        userId: 6,
    },
    {
        id: 118,
        done: false,
        text: "quia modi consequatur vero fugiat",
        userId: 6,
    },
    {
        id: 119,
        done: false,
        text: "corporis ducimus ea perspiciatis iste",
        userId: 6,
    },
    {
        id: 120,
        done: false,
        text: "dolorem laboriosam vel voluptas et aliquam quasi",
        userId: 6,
    },
    {
        id: 121,
        done: true,
        text: "inventore aut nihil minima laudantium hic qui omnis",
        userId: 7,
    },
    {
        id: 122,
        done: true,
        text: "provident aut nobis culpa",
        userId: 7,
    },
    {
        id: 123,
        done: false,
        text: "esse et quis iste est earum aut impedit",
        userId: 7,
    },
    {
        id: 124,
        done: false,
        text: "qui consectetur id",
        userId: 7,
    },
    {
        id: 125,
        done: false,
        text: "aut quasi autem iste tempore illum possimus",
        userId: 7,
    },
    {
        id: 126,
        done: true,
        text: "ut asperiores perspiciatis veniam ipsum rerum saepe",
        userId: 7,
    },
    {
        id: 127,
        done: true,
        text: "voluptatem libero consectetur rerum ut",
        userId: 7,
    },
    {
        id: 128,
        done: false,
        text: "eius omnis est qui voluptatem autem",
        userId: 7,
    },
    {
        id: 129,
        done: false,
        text: "rerum culpa quis harum",
        userId: 7,
    },
    {
        id: 130,
        done: true,
        text: "nulla aliquid eveniet harum laborum libero alias ut unde",
        userId: 7,
    },
    {
        id: 131,
        done: false,
        text: "qui ea incidunt quis",
        userId: 7,
    },
    {
        id: 132,
        done: true,
        text: "qui molestiae voluptatibus velit iure harum quisquam",
        userId: 7,
    },
    {
        id: 133,
        done: true,
        text: "et labore eos enim rerum consequatur sunt",
        userId: 7,
    },
    {
        id: 134,
        done: false,
        text: "molestiae doloribus et laborum quod ea",
        userId: 7,
    },
    {
        id: 135,
        done: false,
        text: "facere ipsa nam eum voluptates reiciendis vero qui",
        userId: 7,
    },
    {
        id: 136,
        done: false,
        text: "asperiores illo tempora fuga sed ut quasi adipisci",
        userId: 7,
    },
    {
        id: 137,
        done: false,
        text: "qui sit non",
        userId: 7,
    },
    {
        id: 138,
        done: true,
        text: "placeat minima consequatur rem qui ut",
        userId: 7,
    },
    {
        id: 139,
        done: false,
        text: "consequatur doloribus id possimus voluptas a voluptatem",
        userId: 7,
    },
    {
        id: 140,
        done: true,
        text: "aut consectetur in blanditiis deserunt quia sed laboriosam",
        userId: 7,
    },
    {
        id: 141,
        done: true,
        text: "explicabo consectetur debitis voluptates quas quae culpa rerum non",
        userId: 8,
    },
    {
        id: 142,
        done: true,
        text: "maiores accusantium architecto necessitatibus reiciendis ea aut",
        userId: 8,
    },
    {
        id: 143,
        done: false,
        text: "eum non recusandae cupiditate animi",
        userId: 8,
    },
    {
        id: 144,
        done: false,
        text: "ut eum exercitationem sint",
        userId: 8,
    },
    {
        id: 145,
        done: false,
        text: "beatae qui ullam incidunt voluptatem non nisi aliquam",
        userId: 8,
    },
    {
        id: 146,
        done: true,
        text: "molestiae suscipit ratione nihil odio libero impedit vero totam",
        userId: 8,
    },
    {
        id: 147,
        done: true,
        text: "eum itaque quod reprehenderit et facilis dolor autem ut",
        userId: 8,
    },
    {
        id: 148,
        done: false,
        text: "esse quas et quo quasi exercitationem",
        userId: 8,
    },
    {
        id: 149,
        done: false,
        text: "animi voluptas quod perferendis est",
        userId: 8,
    },
    {
        id: 150,
        done: false,
        text: "eos amet tempore laudantium fugit a",
        userId: 8,
    },
    {
        id: 151,
        done: true,
        text: "accusamus adipisci dicta qui quo ea explicabo sed vero",
        userId: 8,
    },
    {
        id: 152,
        done: false,
        text: "odit eligendi recusandae doloremque cumque non",
        userId: 8,
    },
    {
        id: 153,
        done: false,
        text: "ea aperiam consequatur qui repellat eos",
        userId: 8,
    },
    {
        id: 154,
        done: true,
        text: "rerum non ex sapiente",
        userId: 8,
    },
    {
        id: 155,
        done: true,
        text: "voluptatem nobis consequatur et assumenda magnam",
        userId: 8,
    },
    {
        id: 156,
        done: true,
        text: "nam quia quia nulla repellat assumenda quibusdam sit nobis",
        userId: 8,
    },
    {
        id: 157,
        done: true,
        text: "dolorem veniam quisquam deserunt repellendus",
        userId: 8,
    },
    {
        id: 158,
        done: true,
        text: "debitis vitae delectus et harum accusamus aut deleniti a",
        userId: 8,
    },
    {
        id: 159,
        done: true,
        text: "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
        userId: 8,
    },
    {
        id: 160,
        done: false,
        text: "et praesentium aliquam est",
        userId: 8,
    },
    {
        id: 161,
        done: true,
        text: "ex hic consequuntur earum omnis alias ut occaecati culpa",
        userId: 9,
    },
    {
        id: 162,
        done: true,
        text: "omnis laboriosam molestias animi sunt dolore",
        userId: 9,
    },
    {
        id: 163,
        done: false,
        text: "natus corrupti maxime laudantium et voluptatem laboriosam odit",
        userId: 9,
    },
    {
        id: 164,
        done: false,
        text: "reprehenderit quos aut aut consequatur est sed",
        userId: 9,
    },
    {
        id: 165,
        done: false,
        text: "fugiat perferendis sed aut quidem",
        userId: 9,
    },
    {
        id: 166,
        done: false,
        text: "quos quo possimus suscipit minima ut",
        userId: 9,
    },
    {
        id: 167,
        done: false,
        text: "et quis minus quo a asperiores molestiae",
        userId: 9,
    },
    {
        id: 168,
        done: false,
        text: "recusandae quia qui sunt libero",
        userId: 9,
    },
    {
        id: 169,
        done: true,
        text: "ea odio perferendis officiis",
        userId: 9,
    },
    {
        id: 170,
        done: false,
        text: "quisquam aliquam quia doloribus aut",
        userId: 9,
    },
    {
        id: 171,
        done: true,
        text: "fugiat aut voluptatibus corrupti deleniti velit iste odio",
        userId: 9,
    },
    {
        id: 172,
        done: false,
        text: "et provident amet rerum consectetur et voluptatum",
        userId: 9,
    },
    {
        id: 173,
        done: false,
        text: "harum ad aperiam quis",
        userId: 9,
    },
    {
        id: 174,
        done: false,
        text: "similique aut quo",
        userId: 9,
    },
    {
        id: 175,
        done: true,
        text: "laudantium eius officia perferendis provident perspiciatis asperiores",
        userId: 9,
    },
    {
        id: 176,
        done: false,
        text: "magni soluta corrupti ut maiores rem quidem",
        userId: 9,
    },
    {
        id: 177,
        done: false,
        text: "et placeat temporibus voluptas est tempora quos quibusdam",
        userId: 9,
    },
    {
        id: 178,
        done: true,
        text: "nesciunt itaque commodi tempore",
        userId: 9,
    },
    {
        id: 179,
        done: true,
        text: "omnis consequuntur cupiditate impedit itaque ipsam quo",
        userId: 9,
    },
    {
        id: 180,
        done: true,
        text: "debitis nisi et dolorem repellat et",
        userId: 9,
    },
    {
        id: 181,
        done: false,
        text: "ut cupiditate sequi aliquam fuga maiores",
        userId: 10,
    },
    {
        id: 182,
        done: true,
        text: "inventore saepe cumque et aut illum enim",
        userId: 10,
    },
    {
        id: 183,
        done: true,
        text: "omnis nulla eum aliquam distinctio",
        userId: 10,
    },
    {
        id: 184,
        done: false,
        text: "molestias modi perferendis perspiciatis",
        userId: 10,
    },
    {
        id: 185,
        done: false,
        text: "voluptates dignissimos sed doloribus animi quaerat aut",
        userId: 10,
    },
    {
        id: 186,
        done: false,
        text: "explicabo odio est et",
        userId: 10,
    },
    {
        id: 187,
        done: false,
        text: "consequuntur animi possimus",
        userId: 10,
    },
    {
        id: 188,
        done: true,
        text: "vel non beatae est",
        userId: 10,
    },
    {
        id: 189,
        done: true,
        text: "culpa eius et voluptatem et",
        userId: 10,
    },
    {
        id: 190,
        done: true,
        text: "accusamus sint iusto et voluptatem exercitationem",
        userId: 10,
    },
    {
        id: 191,
        done: true,
        text: "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
        userId: 10,
    },
    {
        id: 192,
        done: false,
        text: "ut quas possimus exercitationem sint voluptates",
        userId: 10,
    },
    {
        id: 193,
        done: true,
        text: "rerum debitis voluptatem qui eveniet tempora distinctio a",
        userId: 10,
    },
    {
        id: 194,
        done: false,
        text: "sed ut vero sit molestiae",
        userId: 10,
    },
    {
        id: 195,
        done: true,
        text: "rerum ex veniam mollitia voluptatibus pariatur",
        userId: 10,
    },
    {
        id: 196,
        done: true,
        text: "consequuntur aut ut fugit similique",
        userId: 10,
    },
    {
        id: 197,
        done: true,
        text: "dignissimos quo nobis earum saepe",
        userId: 10,
    },
    {
        id: 198,
        done: true,
        text: "quis eius est sint explicabo",
        userId: 10,
    },
    {
        id: 199,
        done: true,
        text: "numquam repellendus a magnam",
        userId: 10,
    },
    {
        id: 200,
        done: false,
        text: "ipsam aperiam voluptates qui",
        userId: 10,
    },
];

const Application = () => {
    // const initialTasks = "https://api.npoint.io/3c26ff950ba8288fc00d";

    // const [Appl, setAppl] = useState([]);

    // const getDataAppl = async () => {
    //     const response = await fetch(initialTasks);
    //     const dataAppl = await response.json();
    //     setAppl(dataAppl);
    // };

    // useEffect(() => {
    //     getDataAppl();
    // });

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    function handleAddtask(text) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({ type: "changed", task: task });
    }

    function handleDeleteTask(taskId) {
        dispatch({ type: "deleted", id: taskId });
    }

    return (
        <>
            <h1
                className="py-6 font-bold text-xl "
                id="tx"
                style={{ fontWeight: "500" }}>
                Jadwal Kegiatan Harian
            </h1>
            <AddTask onAddTask={handleAddtask} />
            <div
                className="flex justify-center py-10z flex-col"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "40px",
                }}>
                <table
                    className="table-auto border-collapse border border-slate-500"
                    style={{
                        width: "95%",
                    }}>
                    <thead>
                        <tr>
                            <th className="border border-slate-600">Check</th>
                            <th className="border border-slate-600">
                                Kegiatan
                            </th>
                            <th className="border border-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskList
                            tasks={tasks}
                            onChangeTask={handleChangeTask}
                            onDeleteTask={handleDeleteTask}
                        />
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Application;
