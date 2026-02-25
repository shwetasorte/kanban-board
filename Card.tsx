import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card as CardType } from './types';
import { useKanban } from './KanbanBoard';

interface CardProps {
  card: CardType;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(card.title);
  const { dispatch } = useKanban();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditTitle(card.title);
  };

  const handleSave = () => {
    if (editTitle.trim() && editTitle !== card.title) {
      dispatch({
        type: 'UPDATE_CARD',
        payload: { cardId: card.id, title: editTitle.trim() },
      });
    }
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditTitle(card.title);
    }
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_CARD',
      payload: { cardId: card.id },
    });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`card ${isDragging ? 'dragging' : ''}`}
    >
      {isEditing ? (
        <div className="card-edit">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleSave}
            className="card-input"
            autoFocus
          />
        </div>
      ) : (
        <div className="card-content">
          <div 
            className="card-title"
            onDoubleClick={handleDoubleClick}
            title="Double-click to edit"
          >
            {card.title}
          </div>
          <button
            onClick={handleDelete}
            className="delete-btn"
            title="Delete card"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};
