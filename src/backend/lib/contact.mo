import Types "../types/contact";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submit(
    submissions : List.List<Types.ContactSubmission>,
    nextId : Nat,
    req : Types.SubmitContactRequest,
  ) : Nat {
    let submission : Types.ContactSubmission = {
      id = nextId;
      name = req.name;
      email = req.email;
      phone = req.phone;
      service = req.service;
      message = req.message;
      timestamp = Time.now();
    };
    submissions.add(submission);
    nextId;
  };

  public func getAll(
    submissions : List.List<Types.ContactSubmission>
  ) : [Types.ContactSubmission] {
    submissions.toArray();
  };

  public func validate(req : Types.SubmitContactRequest) : ?Text {
    if (req.name.size() == 0) {
      return ?"Name darf nicht leer sein.";
    };
    if (req.email.size() == 0) {
      return ?"E-Mail darf nicht leer sein.";
    };
    if (req.message.size() == 0) {
      return ?"Nachricht darf nicht leer sein.";
    };
    null;
  };
};
