import React, { useState, useEffect } from 'react';

const Contact = () => {
  // State pour gérer les messages, le message en cours de rédaction, l'enseignant sélectionné et l'historique des discussions
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [notification, setNotification] = useState(false);
  const [discussionsHistory, setDiscussionsHistory] = useState([]); // Historique des discussions

  // Liste des enseignants avec prénom et nom
  const teachers = [
    { id: 1, name: 'Enseignant 1', firstName: 'Jean', lastName: 'Dupont' },
    { id: 2, name: 'Enseignant 2', firstName: 'Marie', lastName: 'Durand' },
    { id: 3, name: 'Enseignant 3', firstName: 'Paul', lastName: 'Martin' },
  ];

  // Fonction pour envoyer un message de l'étudiant
  const sendMessage = () => {
    if (message && selectedTeacher) {
      const newMessage = {
        author: 'Parent',
        text: message,
        sender: 'parent',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
      setNotification(false);

      // Sauvegarder la discussion dans l'historique
      const newDiscussion = {
        teacher: selectedTeacher,
        messages: [...messages, newMessage],
      };
      setDiscussionsHistory((prevHistory) => [...prevHistory, newDiscussion]);
    }
  };

  // Notification d'un nouveau message
  useEffect(() => {
    if (notification) {
      alert('Vous avez un nouveau message de votre enseignant');
    }
  }, [notification]);

  return (
    <div className="contact-container" style={{ display: 'flex', width: '100%' }}>
      {/* Section Historique des discussions - 1/4 de la page (gauche) */}
      <div className="discussions-history" style={{ width: '25%', padding: '20px', borderRight: '1px solid #ccc' }}>
        <h3>Historique des Discussions</h3>
        {discussionsHistory.map((discussion, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <h4>{discussion.teacher.firstName} {discussion.teacher.lastName}</h4>
            {discussion.messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.sender === 'parent' ? 'right' : 'left', margin: '5px 0' }}>
                <strong>{msg.author}:</strong> {msg.text}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Section centrale - 2/4 de la page (messages) */}
      <div className="chat-section" style={{ width: '50%', padding: '20px' }}>
        <h2>Discussion avec {selectedTeacher ? `${selectedTeacher.firstName} ${selectedTeacher.lastName}` : 'un enseignant'}</h2>

        {/* Boîte de dialogue */}
        <div className="chatbox" style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className="message"
              style={{ textAlign: msg.sender === 'parent' ? 'right' : 'left', margin: '5px 0' }}
            >
              <strong>{msg.author}:</strong> {msg.text}
            </div>
          ))}
        </div>

        {/* Saisie du message avec le choix de l'enseignant à côté du bouton */}
        <div className="message-input" style={{ display: 'flex', alignItems: 'center' }}>
          <textarea
            placeholder="Écrivez votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '80%', padding: '5px', marginRight: '10px' }}
          ></textarea>

          {/* Choix de l'enseignant à côté du bouton "Envoyer" */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <select
              value={selectedTeacher?.id || ''}
              onChange={(e) => {
                const teacher = teachers.find(t => t.id === parseInt(e.target.value));
                setSelectedTeacher(teacher);
              }}
              style={{ marginRight: '10px' }}
            >
              <option value="">Choisissez un enseignant</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.firstName} {teacher.lastName}
                </option>
              ))}
            </select>

            <button onClick={sendMessage} style={{ padding: '5px 10px' }}>
              Envoyer
            </button>
          </div>
        </div>
      </div>

      {/* Section barre latérale - 1/4 de la page (droite) */}
      <div className="sidebar" style={{ width: '25%', padding: '10px', borderLeft: '1px solid #ccc' }}>
       
        {/* Barre latérale divisée en 4 blocs */}
        <div className="sidebar-section" style={{ marginTop: '20px' }}>
          <h4>Bloc 1</h4>
          <p>Contenu du bloc 1</p>
        </div>
        <div className="sidebar-section">
          <h4>Bloc 2</h4>
          <p>Contenu du bloc 2</p>
        </div>
        <div className="sidebar-section">
          <h4>Bloc 3</h4>
          <p>Contenu du bloc 3</p>
        </div>
        <div className="sidebar-section">
          <h4>Bloc 4</h4>
          <p>Contenu du bloc 4</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
