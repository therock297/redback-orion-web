const helpStyles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: '30px',
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    headerText: {
        margin: '20px 0',
        fontSize: '2.5em',
        position: 'relative',
        paddingBottom: '10px',
        color: '#333',
    },
    headerUnderline: {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '5px',
        bottom: '0',
        left: '0',
        background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
        borderRadius: '5px',
        transform: 'translateY(10px) skewX(-15deg)',
    },
    logoImg: {
        width: '200px',
        height: 'auto',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    sideImage: {
        maxWidth: '300px',
        maxHeight: '300px',
        width: 'auto',
        height: 'auto',
        marginRight: '30px',
    },
    chatSection: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    chatBox: {
        width: '100%',
        height: '300px',
        border: '1px solid #eee',
        borderRadius: '5px',
        marginBottom: '20px',
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: '#f0f0f0',
    },
    chatMessage: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#e0e0e0',
    },
    chatInputSection: {
        display: 'flex',
        width: '100%',
        marginBottom: '20px',
    },
    chatInput: {
        flex: 1,
        padding: '10px',
        fontSize: '1.2em',
        borderRadius: '5px 0 0 5px',
        border: '1px solid #ccc',
    },
    sendButton: {
        padding: '10px 20px',
        backgroundColor: '#ff4b2b',
        color: '#fff',
        border: 'none',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
        fontSize: '1.2em',
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#ff416c',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.2em',
    },
    message: {
        marginTop: '20px',
        color: '#ff4b2b',
        fontSize: '1.2em',
    },
    footer: {
        marginTop: '30px',
        color: '#888',
        textAlign: 'center',
        fontSize: '1.2em',
    },
};

export default helpStyles;
