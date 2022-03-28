using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    [BsonIgnoreExtraElements]
    public class Userdetail
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("UserId")]
        public int UserId { get; set; }

        [BsonElement("UserFirstName")]
        public string UserFirstName { get; set; } =string.Empty;

        [BsonElement("UserLastName")]
        public string UserLastName { get; set; } = string.Empty;

        [BsonElement("UserEmail")]
        public string UserEmail { get; set; } = string.Empty;

        [BsonElement("UserAddress")]
        public string UserAddress { get; set; } = string.Empty;

        [BsonElement("UserPhone")]
        public int UserPhone { get; set; }
    }
}