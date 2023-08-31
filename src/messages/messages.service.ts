import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository"


@Injectable()
export class MessagesService {
    // messagesRepository: MessagesRepository;
    constructor(public messagesRepository: MessagesRepository) {

        /*
        ********************** NOTE *******************************
        service is creating its own dependency
        use dependency injection instead
        
        this.messagesRepository = new MessagesRepository();
        
        ***********************************************************
        */
    }

    /*
    ********************** NOTE *******************************
    other implementation for injecting dependency into this class 
    but we are using syntactic suger of javascript which is equilent to below implementation

    messagesRepository : MessagesRepository;

    constructor(messagesRepsitory: MessagesRepository){
        this.messagesRepository = messagesRepsitory
    }
    ************************************************************
    */
    findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }
    findAll() {
        return this.messagesRepository.findAll();
    }

    create(content: string) {
        return this.messagesRepository.create(content);
    }

}